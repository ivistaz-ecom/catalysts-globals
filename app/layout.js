'use client'
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "../components/SharedComponents/Header";
import Footer from "../components/SharedComponents/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  // Check if the current route matches the condition
  const hideHeaderFooter = pathname === "/impact-catalyst-foundation-icf";

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="LysyG3zJq4ZnwfQvPHoHcXwGWE6KeUAc7f3e9aGBtW8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-59KDHDLRD8');
            `,
          }}
        />
      </head>
      <body>
        {!hideHeaderFooter && <Header />}
        {children}
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59KDHDLRD8"
          strategy="afterInteractive"
        />
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
