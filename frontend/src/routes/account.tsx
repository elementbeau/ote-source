import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import type { UserGetDto } from '../api/users';
import { getCurrentUser, patchUser } from "../api/users";

type SaveState = "idle" | "saving" | "saved" | "error";

export const Route = createFileRoute("/account")({
  component: AccountPage,
});

function AccountPage() {
  const [profile, setProfile] = useState<UserGetDto | null>(null);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setSaveState("idle");
        const user = await getCurrentUser();

        setProfile(user);
        setUsername(user.username);
        setFirstName(user.firstName ?? "");
        setMiddleName(user.middleName ?? "");
        setLastName(user.lastName ?? "");
      } catch (err) {
        setSaveState("error");
        setErrorMsg(err instanceof Error ? err.message : "Failed to load profile.");
      }
    };

    load();
  }, []);

  const email = profile?.emailAddress ?? "(missing)";

  function validate(): string | null {
    const u = username.trim();
    if (u.length === 0) return "Username is required.";
    if (u.length > 255) return "Username must be less than 255 characters.";
    if (firstName.trim().length > 255) return "First name must be less than 255 characters.";
    if (middleName.trim().length > 255) return "Middle name must be less than 255 characters.";
    if (lastName.trim().length > 255) return "Last name must be less than 255 characters.";
    return null;
  }

  async function onSave() {
    setErrorMsg(null);

    const validationError = validate();
    if (validationError) {
      setSaveState("error");
      setErrorMsg(validationError);
      return;
    }

    setSaveState("saving");

    try {
      await new Promise((r) => setTimeout(r, 600));

      if (!profile) throw new Error("Profile not loaded.");

      const updated = await patchUser(profile.userId, {
        username: username.trim(),
        firstName: firstName.trim() || null,
        middleName: middleName.trim() || null,
        lastName: lastName.trim() || null,
      });

      setProfile(updated);
      setSaveState("saved");

      setTimeout(() => setSaveState("idle"), 1500);
    } catch (err) {
      setSaveState("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to save.");
    }
  }

  const isSaving = saveState === "saving";

  if (!profile && saveState !== "error") {
    return <div className="p-6 bg-amber-50">Loading account...</div>;
  }

  return (
    <div className="mx-auto max-w-2xl p-6 bg-amber-50">
      <h1 className="text-2xl font-semibold">Account</h1>

      <div className="mt-6 space-y-4 rounded-xl border p-4">
        <div>
          <div className="text-sm text-gray-800">Email</div>
          <div className="font-medium">{email}</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <div className="text-sm text-gray-800">Username</div>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isSaving}
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-800">First name</div>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isSaving}
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-800">Middle name</div>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              disabled={isSaving}
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-800">Last name</div>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isSaving}
            />
          </label>
        </div>

        {errorMsg && (
          <div className="rounded-md border border-red-800 bg-red-100 p-3 text-sm">
            {errorMsg}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            className="rounded-md border px-4 py-2 font-medium disabled:opacity-50"
            onClick={onSave}
            disabled={isSaving || !profile}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>

          {saveState === "saved" && (
            <div className="text-sm text-green-700">Saved.</div>
          )}
        </div>
        
      </div>

{/*   // Debug output for profiles
      <pre className="mt-6 rounded-md border p-3 text-xs">
        {JSON.stringify({ profile, username, firstName, middleName, lastName, saveState, errorMsg }, null, 2)}
      </pre> */}
      
      
    </div>
  );
}