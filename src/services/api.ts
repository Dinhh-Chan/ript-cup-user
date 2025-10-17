import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://jsonplaceholder.typicode.com"
const AUTH_STORAGE_KEY = process.env.NEXT_PUBLIC_AUTH_STORAGE_KEY || "ript_fc_token"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem(AUTH_STORAGE_KEY) : null
  if (token) {
    config.headers = config.headers ?? {}
    ;(config.headers as Record<string, string>).Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status
    const message = error?.response?.data?.message || error.message || "Unknown error"
    return Promise.reject({ status, message, error })
  }
)

export async function get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
  const res = await apiClient.get<T>(url, { params })
  return res.data
}

export async function post<T, B = unknown>(url: string, body?: B): Promise<T> {
  const res = await apiClient.post<T>(url, body)
  return res.data
}

export async function put<T, B = unknown>(url: string, body?: B): Promise<T> {
  const res = await apiClient.put<T>(url, body)
  return res.data
}

export async function del<T>(url: string): Promise<T> {
  const res = await apiClient.delete<T>(url)
  return res.data
}

export const authStorage = {
  getToken: () => (typeof window !== "undefined" ? localStorage.getItem(AUTH_STORAGE_KEY) : null),
  setToken: (token: string) => {
    if (typeof window !== "undefined") localStorage.setItem(AUTH_STORAGE_KEY, token)
  },
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem(AUTH_STORAGE_KEY)
  },
}
