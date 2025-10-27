import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/contexts/AuthContext"
import { PopupProvider } from "@/contexts/PopupContext"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cine Escola - Sua Plataforma de Cinema",
  description:
    "Descubra, vote e acompanhe os melhores filmes. Sistema de votação para estreias, tendências e muito mais.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AuthProvider>
          <PopupProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </PopupProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
