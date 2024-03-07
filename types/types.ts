export type User = {
  id: number
  email: string
  // Ajoutez d'autres propriétés selon vos besoins
}

export type AuthContextType = {
  user: User | null
  checkUser: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
