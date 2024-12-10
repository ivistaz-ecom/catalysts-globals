import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "../components/SharedComponents/Header"
import Footer from "../components/SharedComponents/Footer"

// const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
