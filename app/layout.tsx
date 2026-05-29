// app/layout.tsx

import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import PageTransition from "@/components/ui/PageTransition"
import Loader from "../components/ui/loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "ConvenantSoft Technologies",
  description:
    "Empowering businesses through innovative technology solutions and digital transformation services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="ADSA5Li8wGXyc8528cNUQt68EJo2c6RNHx3nV5pSX7Q" />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FHGK9TWLLG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FHGK9TWLLG');
          `}
        </Script>
      </head>
      <body>
        <Loader />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        {/* <PageTransition /> */}
      </body>
    </html>
  )
}
