import { useEffect, useMemo, useState } from "react";
import { clearToken, getToken, setToken as storeToken } from "../../services/AuthStorage";
import { AuthContext, type AuthUser, type AuthState } from "./AuthContext";

const USER_KEY = "ote_auth_user";

function loadUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

function saveUser(user: AuthUser | null) {
  if (!user) localStorage.removeItem(USER_KEY);
  else localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setToken(getToken());
    setUser(loadUser());
  }, []);

  function login(newToken: string, newUser: AuthUser) {
    storeToken(newToken);
    saveUser(newUser);
    setToken(newToken);
    setUser(newUser);
  }

  function logout() {
    clearToken();
    saveUser(null);
    setToken(null);
    setUser(null);
  }

  const value = useMemo<AuthState>(
    () => ({
      token,
      user,
      isAuthed: Boolean(token),
      login,
      logout,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}