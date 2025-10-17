import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { AppProviders } from "@/src/providers/app-providers"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "RIPT Football Cup 2025",
  description: "Giải bóng đá RIPT CUP - Viện Khoa học Kỹ thuật Bưu điện",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans ${inter.variable} ${roboto.variable}`}>
        <AppProviders>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Suspense>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  )
}
