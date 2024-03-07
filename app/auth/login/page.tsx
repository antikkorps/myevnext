import LoginLayout from "../layout"
import { LoginForm } from "@/components/LoginForm"

export default async function Login() {
  return (
    <>
      <LoginForm />
    </>
  )
}

Login.layout = LoginLayout
