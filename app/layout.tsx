import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Head from "next/head"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BeatMarket - Premium Beats Marketplace",
  description: "Find and purchase premium beats from top producers worldwide.",
  generator: 'v0.dev',
  icons: {
    // “icon” will be used for <link rel="icon">
    icon: '../favicons/favicon-32x32.png',
    // “shortcut” is fallback for some browsers
    shortcut: '../favicons/favicon-32x32.png',
    // if you have an Apple-touch icon:
    apple: '../favicons/apple-touch-icon.png',
  },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
   
      
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'