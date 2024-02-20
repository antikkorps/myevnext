import { API_ENDPOINTS } from "../config/apiEndpoints"

interface User {
  id: string
  username: string
  email: string
  role: string
}

export async function getUser(user: User): Promise<User> {
  try {
    const response = await fetch(API_ENDPOINTS.USERS_PROFILE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.id}`,
      },
    })
    const data: User = await response.json()
    console.log("Réponse de l'API:", data)
    return data
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error)
    throw error
  }
}
