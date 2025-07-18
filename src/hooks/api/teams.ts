import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../../contexts/AuthContext'
import apiService from '../../services/apiService'
import { API_ENDPOINTS, QUERY_KEYS } from '../../config/constants'
import { Team, CreateTeamPayload, UpdateTeamPayload } from '../../types/api/teams'

export const useTeams = () => {
  const { isAuthenticated } = useAuth()

  return useQuery({
    queryKey: QUERY_KEYS.TEAMS.LIST,
    queryFn: () => apiService.get<Team[]>(API_ENDPOINTS.TEAMS.BASE),
    enabled: isAuthenticated,
  })
}

export const useTeam = (id: string) => {
  const { isAuthenticated } = useAuth()

  return useQuery({
    queryKey: QUERY_KEYS.TEAMS.BY_ID(id),
    queryFn: () => apiService.get<Team>(API_ENDPOINTS.TEAMS.BY_ID(id)),
    enabled: isAuthenticated && !!id,
  })
}

export const useCreateTeam = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (teamData: CreateTeamPayload) => apiService.post(API_ENDPOINTS.TEAMS.BASE, teamData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST })
    },
  })
}

export const useUpdateTeam = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTeamPayload }) =>
      apiService.put(API_ENDPOINTS.TEAMS.BY_ID(id), data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST })
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TEAMS.BY_ID(variables.id),
      })
    },
  })
}

export const useDeleteTeam = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => apiService.delete(API_ENDPOINTS.TEAMS.BY_ID(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST })
    },
  })
}
