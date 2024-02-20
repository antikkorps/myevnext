import { API_ENDPOINTS } from "@/config/apiEndpoints"

export async function getEvaluation() {
  try {
    const response = await fetch(API_ENDPOINTS.EVALUATIONS)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error)
    throw error
  }
}
