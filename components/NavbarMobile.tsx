"use client"
import { useState } from "react"

import { HomeIcon, User, SquarePenIcon, Settings2 } from "lucide-react"

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
        <HomeIcon className={iconClass("Home")} onClick={() => handleIconClick("Home")} />
        <User className={iconClass("User")} onClick={() => handleIconClick("User")} />
        <SquarePenIcon
          className={iconClass("SquarePen")}
          onClick={() => handleIconClick("SquarePen")}
        />
        <Settings2
          className={iconClass("Settings2")}
          onClick={() => handleIconClick("Settings2")}
        />
      </div>
    </>
  )
}
