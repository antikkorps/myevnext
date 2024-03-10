"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "@/app/auth-context"

import AdminCardClients from "@/components/AdminCardClients"
import AdminCardEvaluations from "@/components/AdminCardEvaluations"
import AdminCardStatus from "@/components/AdminCardStatus"

function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <>
      <div className="sm:py-5">This is the Dashboard page</div>

      <div className="stats shadow ">
        <AdminCardClients />

        <AdminCardEvaluations />

        <AdminCardStatus />
      </div>
    </>
  )
}

export default Dashboard
