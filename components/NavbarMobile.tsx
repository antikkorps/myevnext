import { HomeIcon, User, SquarePenIcon, Settings2 } from "lucide-react"

export default function NavbarMobile() {
  return (
    <>
      <div className="mobileNavbarContainer">
        <HomeIcon className="iconClass" />
        <User className="iconClass" />
        <SquarePenIcon className="iconClass" />
        <Settings2 className="iconClass" />
      </div>
    </>
  )
}
