"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/toggle"
import { LogoutButton } from "@/components/LogoutButton"
import { useAuth } from "@/app/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Navbar() {
  const router = useRouter()
  const { user, checkUser, login, logout } = useAuth()

  const handleLogin = async () => {
    try {
      router.push("/auth/login")
    } catch (error) {
      console.error("An unexpected error happened:", error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [checkUser])

  return (
    <>
      <nav className="navbarContainer">
        {user ? (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <LogoutButton />
          </>
        ) : (
          <Button variant="ghost" onClick={handleLogin}>
            Se connecter
          </Button>
        )}
        <ModeToggle />
      </nav>
    </>
  )
}
