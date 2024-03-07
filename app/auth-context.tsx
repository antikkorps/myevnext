"use client"

import { createContext, useContext, useState } from "react"
import { User, AuthContextType } from "@/types/types"
import { login, logout } from "@/auth/auth"
import { API_ENDPOINTS } from "@/config/apiEndpoints"

const AuthContext = createContext<AuthContextType | undefined>(undefined)
const session_cookie_name = process.env.NEXT_PUBLIC_SESSION_COOKIE || ""
const userProfileApi = API_ENDPOINTS.PUBLIC_USERS_PROFILE

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)

  const checkUser = async () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(session_cookie_name))

    if (cookie) {
      const token = cookie.split("=")[1]
      const response = await fetch(userProfileApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const user = await response.json()
        setUser(user)
      } else {
        setUser(null)
      }
    } else {
      setUser(null)
    }
  }

  const loginUser = async (email: string, password: string) => {
    const user = await login(email, password)
    setUser(user)
  }

  const logoutUser = async () => {
    await logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, checkUser, login: loginUser, logout: logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}
