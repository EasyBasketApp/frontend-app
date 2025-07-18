import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../config/constants";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { APIErrorBase } from "../../types/api";

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

  return useMutation<AuthResponse, APIErrorBase, LoginCredentials>({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiService.post<AuthResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );
      return response;
    },
    onSuccess: (data) => {
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

  return useMutation<AuthResponse, APIErrorBase, RegisterData>({
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
