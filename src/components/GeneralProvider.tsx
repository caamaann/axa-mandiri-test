"use client"

import { ReactNode, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface TProps {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export default function GeneralProvider({ children }: TProps) {
  const [hasMounted, setHasMounted] = useState<boolean>(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {hasMounted ? children : null}
    </QueryClientProvider>
  )
}
