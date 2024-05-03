import "@/styles/globals.css"
import { type Metadata, type Viewport } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SiteHeader } from "@/components/SiteHeader"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { sharedMetadata } from "@/config/metadata"
import { Toaster } from "@/components/ui/toaster"
import GeneralProvider from "@/components/GeneralProvider"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  ...sharedMetadata,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <GeneralProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
              <Toaster />
            </GeneralProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
