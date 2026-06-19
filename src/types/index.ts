export interface User {
  id?: number
  name: string
  username: string
  password?: string
  email: string
  country: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  msg?: string
}

export interface Ingredient {
  id?: number
  name: string
  quantity?: string
}

export interface Recipe {
  id?: number
  name: string
  ingredients: Ingredient[]
}
