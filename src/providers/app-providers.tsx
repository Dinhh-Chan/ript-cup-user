"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <SonnerToaster richColors position="top-right" />
    </QueryClientProvider>
  )
}


