import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/ui/toggle"
import { LogoutButton } from "@/components/LogoutButton"

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <LogoutButton />
        <ModeToggle />
      </div>
    </>
  )
}

export default Navbar
