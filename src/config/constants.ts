export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    PROFILE: '/api/auth/profile',
  },
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: string) => `/api/users/${id}`,
  },
  TEAMS: {
    BASE: '/api/teams',
    BY_ID: (id: string) => `/api/teams/${id}`,
    MEMBERS: (id: string) => `/api/teams/${id}/members`,
  },
} as const

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'basketeasy_auth_token',
  REFRESH_TOKEN: 'basketeasy_refresh_token',
  USER: 'basketeasy_user',
} as const

export const QUERY_KEYS = {
  AUTH: {
    PROFILE: ['auth', 'profile'] as const,
  },
  USERS: {
    LIST: ['users'] as const,
    BY_ID: (id: string) => ['users', id] as const,
  },
  TEAMS: {
    LIST: ['teams'] as const,
    BY_ID: (id: string) => ['teams', id] as const,
    MEMBERS: (id: string) => ['teams', id, 'members'] as const,
  },
} as const
