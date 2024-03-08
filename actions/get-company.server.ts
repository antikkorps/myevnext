"use server"
import { API_ENDPOINTS } from "../config/apiEndpoints"
import { Company } from "../types/types"
import { cookies } from "next/headers"

export async function getCompanies(): Promise<Company[]> {
  const cookieStore = cookies()
  const token = cookieStore.get(process.env.NEXT_PUBLIC_SESSION_COOKIE as string)?.value
  try {
    const response = await fetch(API_ENDPOINTS.COMPANIES, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const companies = await response.json()
    console.log("Réponse de l'API:", companies)
    return companies
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error)
    throw error
  }
}
