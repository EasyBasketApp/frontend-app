import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/apiService";
import { API_ENDPOINTS, QUERY_KEYS } from "../../config/constants";

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
