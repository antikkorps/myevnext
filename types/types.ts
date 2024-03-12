export type User = {
  id: number
  email: string
  // Ajoutez d'autres propriétés selon vos besoins
}

export type UserState = { user?: any; error?: { code: number; message: string } }

export type AuthContextType = {
  user: User | null
  checkUser: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export type Company = {
  id: string
  name: string
  address: string
  city: string
  zipcode: string
  country: String
  logo: String
  // contrats: Contrat[]
  users: User[]
  // forms:     Form[]
}
