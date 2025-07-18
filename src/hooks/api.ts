import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import apiService from "../services/apiService";
import { API_ENDPOINTS, QUERY_KEYS } from "../config/constants";

export const useProfile = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: QUERY_KEYS.AUTH.PROFILE,
    queryFn: () => apiService.get(API_ENDPOINTS.AUTH.PROFILE),
    enabled: isAuthenticated,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
