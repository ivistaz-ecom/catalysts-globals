import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "../components/SharedComponents/Header";
import Footer from "../components/SharedComponents/Footer";

// const inter = Inter({ subsets: ["latin"] });

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
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59KDHDLRD8"
          strategy="afterInteractive"
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
        <Footer />
        
      </body>
    </html>
  );
}
