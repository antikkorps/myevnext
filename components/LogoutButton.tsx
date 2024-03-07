"use client"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/auth-context"

export function LogoutButton() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
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
