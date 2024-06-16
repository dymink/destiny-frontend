export interface User {
  id: string
  avatar_id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  password: string
  activites: Activites[]
  is_verified: boolean
  created_at: string
  modified_at: string
}

export interface Activites {
  id: string
  title: string
  description: string
  email: string
  phone_number: string
  is_active: boolean
  is_payed: boolean
  created_at: string
  modified_at: string
}
