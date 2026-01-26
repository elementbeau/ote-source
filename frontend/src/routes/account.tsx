import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { useAuth } from "../components/auth/useAuth";

export const Route = createFileRoute("/account")({
  component: AccountPage,
});

const PROFILE_KEY = "ote_profile";

type Profile = {
  firstName: string;
  lastName: string;
};

function loadProfile(userId: string): Profile {
  const raw = localStorage.getItem(`${PROFILE_KEY}:${userId}`);
  if (!raw) return { firstName: "", lastName: "" };
  try {
    return JSON.parse(raw) as Profile;
  } catch {
    return { firstName: "", lastName: "" };
  }
}

function saveProfile(userId: string, profile: Profile) {
  localStorage.setItem(`${PROFILE_KEY}:${userId}`, JSON.stringify(profile));
}

function AccountPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const userId = auth.user?.id ?? "unknown";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!auth.isAuthed) {
      navigate({ to: "/" });
    }
  }, [auth.isAuthed, navigate]);

  useEffect(() => {
  if (!auth.user?.id) return;
  const p = loadProfile(auth.user.id);
  setFirstName(p.firstName);
  setLastName(p.lastName);
  }, [auth.user?.id]);

  if (!auth.isAuthed) {
    return null;
  }

  function handleSave() {
    if (!auth.user?.id) return;
    saveProfile(auth.user.id, { firstName, lastName });
    setSavedMsg("Saved.");
    window.setTimeout(() => setSavedMsg(null), 1500);
  }

return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">My Account</h1>

      <div className="mt-4 space-y-4 rounded-xl border border-gray-200 bg-white p-5">
        <div className="space-y-2">
          <div>
            <div className="text-xs font-medium text-gray-500">Email</div>
            <div className="text-sm font-semibold text-gray-900">{auth.user?.email}</div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-500">Username</div>
            <div className="text-sm font-semibold text-gray-900">
              {auth.user?.username ?? "(missing)"}
            </div>
          </div>

          <div className="text-xs text-gray-400">User ID: {userId}</div>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-3">
          <div className="text-sm font-semibold text-gray-900">Profile</div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="First name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              Save
            </button>

            {savedMsg && <div className="text-sm text-gray-600">{savedMsg}</div>}
          </div>

          <div className="text-xs text-gray-500">
          </div>
        </div>
      </div>
    </div>
  );
}