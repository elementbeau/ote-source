import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from "react";
import { useAuth } from "../components/auth/useAuth";

export const Route = createFileRoute("/account")({
  component: AccountPage,
});

function AccountPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthed) {
      navigate({ to: "/" });
    }
  }, [auth.isAuthed, navigate]);

  if (!auth.isAuthed) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">My Account</h1>

      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
        <div className="text-sm text-gray-600">Logged in as</div>
        <div className="mt-1 text-base font-medium">{auth.user?.email}</div>
      </div>
    </div>
  );
}