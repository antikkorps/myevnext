import { API_ENDPOINTS } from "../config/apiEndpoints"
interface Company {
  id: string
  name: string
  address: string
  city: string
  zipCode: string
}

export async function getCompanies() {
  try {
    const response = await fetch(API_ENDPOINTS.COMPANIES)
    const data: Company[] = await response.json()
    console.log("Réponse de l'API:", data)
    return data
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error)
    throw error
  }
}
