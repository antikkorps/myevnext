import { Button } from "./ui/button"
import { logout } from "@/auth/auth"

export default function LogoutButton() {
  return (
    <>
      <Button variant="destructive">Se déconnecter</Button>
    </>
  )
}
