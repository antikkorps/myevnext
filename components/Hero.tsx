"use client"
import { useAuth } from "@/app/auth-context"
import Link from "next/link"

export default function Hero() {
  const { user } = useAuth()
  return (
    <div className="relative isolate px-6 lg:px-8 py-20 min-h-screen ">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Vous voulez participer à l&apos;aventure ?
            <a href="#" className="font-semibold text-indigo-600 pl-1">
              <span className="absolute inset-0" aria-hidden="true" />
              En savoir plus <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Bienvenue sur le site
            <span className="text-indigo-600 ml-1">MyEvaluation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            Ici vous pourrez réaliser vos évaluations en ligne et envoyer directement vos
            comptes-rendus à vos participants de façon simple et efficace.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {user ? (
              <Link
                href="/myevaluation/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </Link>
            )}

            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              en savoir plus <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
