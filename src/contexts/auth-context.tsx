"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { authStorage } from "@/src/services/api"

type AuthContextValue = {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => authStorage.getToken())

  const login = useCallback((newToken: string) => {
    authStorage.setToken(newToken)
    setToken(newToken)
  }, [])

  const logout = useCallback(() => {
    authStorage.clear()
    setToken(null)
  }, [])

  const value = useMemo<AuthContextValue>(() => ({
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
  }), [token, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}


