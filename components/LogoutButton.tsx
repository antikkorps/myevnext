"use client"
import { Button } from "./ui/button"
import { logout } from "@/auth/auth"

export function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("An unexpected error happened:", error)
    }
  }
  return (
    <>
      <Button variant="destructive" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </>
  )
}
