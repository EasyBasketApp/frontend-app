import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: (failureCount, error: Error) => {
        if ((error as AxiosError).isAxiosError) {
          const axiosError = error as AxiosError;
          if (
            axiosError.response?.status &&
            axiosError.response.status >= 400 &&
            axiosError.response.status < 500
          ) {
            return false;
          }
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
