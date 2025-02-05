import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "MessageLM - AI Sales Enablement & Outreach Software",
  description: "MessageLM is an AI sales enablement and outreach software that helps businesses write high-quality, human-like messages using AI. Custom-built for your CRM to provide a sophisticated sales experience.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any"
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32"
      }
    ],
    apple: {
      url: "/apple-icon.png",
      type: "image/png",
      sizes: "180x180"
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-background antialiased flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 