"use server"
// all methods related to the user authentication
import { API_ENDPOINTS } from "@/config/apiEndpoints"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

const session_cookie_name = process.env.NEXT_PUBLIC_SESSION_COOKIE || ""

export async function login(email: string, password: string) {
  const response = await fetch(`${API_ENDPOINTS.LOGIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()
  if (response.ok) {
    // localStorage.setItem("access_token", data.access_token)
    cookies().set({
      name: session_cookie_name,
      value: data.access_token,
      maxAge: 60 * 60 * 24 * 7,
    })
    revalidatePath("/dashboard")
    return data
  } else {
    throw new Error(data.error)
  }
}
