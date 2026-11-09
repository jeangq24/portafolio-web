import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" })
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Jean Garzón | Desarrollador de Software",
  description: "Portfolio profesional de Jean Sebastian Garzón, Desarrollador de software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${sans.className} ${sans.variable} ${display.variable}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:bg-background focus:p-4">
          Saltar al contenido
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  )
}