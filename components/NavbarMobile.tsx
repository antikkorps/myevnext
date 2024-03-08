"use client"
import Link from "next/link"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, User, SquarePenIcon, Settings2, Search } from "lucide-react"
import { useAuth } from "@/app/auth-context"
import { useRouter } from "next/navigation"

export default function NavbarMobile() {
  const [selectedIcon, setSelectedIcon] = useState<String | null>(null)
  const { user, checkUser, logout } = useAuth()
  const router = useRouter()

  const handleIconClick = (iconName: String) => {
    setSelectedIcon(iconName)
  }

  const handleLogin = async () => {
    try {
      router.push("/auth/login")
    } catch (error) {
      console.error("An unexpected error happened:", error)
    }
  }

  const iconClass = (iconName: String) =>
    `iconClass ${selectedIcon === iconName ? "text-blue-500" : ""}`

  return (
    <>
      <div className="mobileNavbarContainer">
        <Link href="/">
          <HomeIcon
            className={iconClass("Home")}
            onClick={() => handleIconClick("Home")}
          />
        </Link>
        <Link href="/search">
          <Search className={iconClass("User")} onClick={() => handleIconClick("User")} />
        </Link>

        {user ? (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <Link href="/profile">
            <User className={iconClass("User")} onClick={handleLogin} />
          </Link>
        )}

        <Link href="/create">
          <SquarePenIcon
            className={iconClass("SquarePen")}
            onClick={() => handleIconClick("SquarePen")}
          />
        </Link>
        <Link href="/params">
          <Settings2
            className={iconClass("Settings2")}
            onClick={() => handleIconClick("Settings2")}
          />
        </Link>
      </div>
    </>
  )
}
