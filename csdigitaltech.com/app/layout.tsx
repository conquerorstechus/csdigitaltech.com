// app/layout.tsx

import type { Metadata } from "next"
import type React from "react"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import PageTransition from "@/components/ui/PageTransition"
import Loader from "../components/ui/loader"
import LeadConnectorWidget from "@/components/ui/LeadConnectorWidget"
import CookieConsent from "@/components/cookie-consent/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cornerstone Digital Technologies",
  description:
    "Empowering businesses through innovative technology solutions and digital transformation services.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="ADSA5Li8wGXyc8528cNUQt68EJo2c6RNHx3nV5pSX7Q" />
      </head>
      <body className="antialiased">
        <CookieConsent>
          <Loader />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <LeadConnectorWidget />
          {/* <PageTransition /> */}
          {/* Optional analytics loads only after cookie consent. */}
        </CookieConsent>
      </body>
    </html>
  )
}
