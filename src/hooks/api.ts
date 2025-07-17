import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import apiService from "../services/apiService";
import { API_ENDPOINTS, QUERY_KEYS } from "../config/constants";

// Types
interface AuthResponse {
  accessToken: string;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
  message?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  role?: string;
}

// Auth hooks
export const useLogin = () => {
  const { login } = useAuth();

  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiService.post<AuthResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );
      return response;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      if (data?.accessToken && data?.user) {
        // Convert user id to string to match AuthContext interface
        const userForAuth = {
          ...data.user,
          id: data.user.id.toString(),
        };
        login(data.accessToken, userForAuth);
      } else {
        throw new Error("Invalid response structure from server");
      }
    },
  });
};

export const useRegister = () => {
  const { login } = useAuth();

  return useMutation<AuthResponse, Error, RegisterData>({
    mutationFn: async (userData: RegisterData) => {
      return await apiService.post<AuthResponse>(
        API_ENDPOINTS.AUTH.REGISTER,
        userData
      );
    },
    onSuccess: (data) => {
      if (data.accessToken && data.user) {
        // Convert user id to string to match AuthContext interface
        const userForAuth = {
          ...data.user,
          id: data.user.id.toString(),
        };
        login(data.accessToken, userForAuth);
      }
    },
  });
};

export const useProfile = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.AUTH.PROFILE,
    queryFn: () => apiService.get(API_ENDPOINTS.AUTH.PROFILE),
    enabled: isAuthenticated,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Team hooks
export const useTeams = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.TEAMS.LIST,
    queryFn: () => apiService.get(API_ENDPOINTS.TEAMS.BASE),
    enabled: isAuthenticated,
  });
};

export const useTeam = (id: string) => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.TEAMS.BY_ID(id),
    queryFn: () => apiService.get(API_ENDPOINTS.TEAMS.BY_ID(id)),
    enabled: isAuthenticated && !!id,
  });
};

export const useCreateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (teamData: any) =>
      apiService.post(API_ENDPOINTS.TEAMS.BASE, teamData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST });
    },
  });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      apiService.put(API_ENDPOINTS.TEAMS.BY_ID(id), data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TEAMS.BY_ID(variables.id),
      });
    },
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      apiService.delete(API_ENDPOINTS.TEAMS.BY_ID(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TEAMS.LIST });
    },
  });
};

// User hooks
export const useUsers = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.USERS.LIST,
    queryFn: () => apiService.get(API_ENDPOINTS.USERS.BASE),
    enabled: isAuthenticated,
  });
};

export const useUser = (id: string) => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.USERS.BY_ID(id),
    queryFn: () => apiService.get(API_ENDPOINTS.USERS.BY_ID(id)),
    enabled: isAuthenticated && !!id,
  });
};
