"use client"
import { Button } from "./ui/button"
import { logout } from "@/auth/auth"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()
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
