import {
  QueryClient,
  Hydrate as $Hydrate,
  useQuery as $useQuery,
  dehydrate as $dehydrate,
  useMutation as $useMutation,
} from '@tanstack/react-query';

export const END_POINT = import.meta.env.VITE_APP_END_POINT;
export const TOKEN_KEY = import.meta.env.VITE_APP_TOKEN_INSTANCE;

export const Hydrate = $Hydrate;
export const useQuery = $useQuery;
export const dehydrate = $dehydrate;
export const useMutation = $useMutation;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});
