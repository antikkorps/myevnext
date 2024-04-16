"use client"
import Link from "next/link"
import { Waves } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/auth-context"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { user, login } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/myevaluation/dashboard")
    }
  }, [user, router])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await login(email, password)
    } catch (error) {
      const err = error as Error
      console.error("An unexpected error happened:", err)
      setErrorMessage(err.message)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3500)
    }
  }
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-32 lg:py-52 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Waves className="justify-center mx-auto text-center h-32 w-32" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Merci de vous Connecter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="/forgotten-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Pas encore inscrit ?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Rejoignez-nous
            </Link>
          </p>
        </div>

        {showAlert && errorMessage && (
          <div className="flex justify-center align-middle">
            <div role="alert" className="alert alert-error sm:w-1/2 absolute bottom-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
