"use client"
import Link from "next/link"
import { useState } from "react"

import { HomeIcon, User, SquarePenIcon, Settings2, Search } from "lucide-react"

export default function NavbarMobile() {
  const [selectedIcon, setSelectedIcon] = useState<String | null>(null)

  const handleIconClick = (iconName: String) => {
    setSelectedIcon(iconName)
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
        <Link href="/profile">
          <User className={iconClass("User")} onClick={() => handleIconClick("User")} />
        </Link>
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
