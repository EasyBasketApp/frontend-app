import { User } from './user'

export type TeamRole = 'MEMBER' | 'ADMIN'

export enum TeamRoleEnum {
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN',
}

export type Team = {
  id: string
  name: string
  club: string
  color?: string
  description?: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
  currentUserRole: TeamRole
  members: TeamMember[]
}

export type TeamMember = {
  id: string
  userId: string
  teamId: string
  role: 'MEMBER' | 'ADMIN'
  user: User
  createdAt: string
  updatedAt: string
}

export type CreateTeamPayload = {
  name: string
  club: string
  color?: string
  description?: string
  imageUrl?: string
}

export type UpdateTeamPayload = Partial<CreateTeamPayload>
