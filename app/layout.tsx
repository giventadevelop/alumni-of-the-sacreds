import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CookieConsentProvider } from "./components/CookieConsent";
import { ADSENSE_CLIENT } from "@/lib/adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Alumni Of The Sacreds',
  description: 'Alumni association of Sacred Heart English Medium Higher Secondary School Moolamattom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <CookieConsentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}