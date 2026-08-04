"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  nickname: string;
  avatar_url: string | null;
  created_at: string;
}

interface UserPreferences {
  interests: string[];
}

interface AuthContextType {
  user: User | null;
  preferences: UserPreferences | null;
  loading: boolean;
  mutate: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setPreferences(data.preferences || { interests: [] });
      } else {
        setUser(null);
        setPreferences(null);
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      setPreferences(null);
      window.dispatchEvent(new Event("gg-auth-changed"));
    } catch (e) {
      console.error("Logout failed", e);
    }
  };

  useEffect(() => {
    fetchUser();
    
    const handleAuthChange = () => fetchUser();
    window.addEventListener("gg-auth-changed", handleAuthChange);
    return () => window.removeEventListener("gg-auth-changed", handleAuthChange);
  }, []);

  return (
    <AuthContext.Provider value={{ user, preferences, loading, mutate: fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
