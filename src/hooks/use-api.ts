import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query"
import { del, get, post, put } from "@/src/services/api"

export function useApiQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData>(
  key: readonly unknown[],
  url: string,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, typeof key>, "queryKey" | "queryFn">,
) {
  return useQuery<TQueryFnData, TError, TData, typeof key>({
    queryKey: key,
    queryFn: () => get<TQueryFnData>(url),
    ...options,
  })
}

export function useApiMutation<TData = unknown, TError = unknown, TVariables = unknown>(
  method: "post" | "put" | "delete",
  url: string,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, unknown>, "mutationFn">,
) {
  return useMutation<TData, TError, TVariables>({
    mutationFn: (variables: TVariables) => {
      if (method === "post") return post<TData, TVariables>(url, variables)
      if (method === "put") return put<TData, TVariables>(url, variables)
      return del<TData>(url)
    },
    ...options,
  })
}


