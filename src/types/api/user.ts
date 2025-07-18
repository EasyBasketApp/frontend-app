export type UserRole = 'USER' | 'ADMIN'

export enum UserRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type User = {
  id: string
  username: string
  email: string
  role: UserRole
}
