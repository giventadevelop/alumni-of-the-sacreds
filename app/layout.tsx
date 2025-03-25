'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./components/Logo";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />

              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </header>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Phone: 04862 252001</p>
                <p>Email: 29013shemhs@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className="hover:text-blue-400">Home</Link>
                  <Link href="/about" className="hover:text-blue-400">About</Link>
                  <Link href="/events" className="hover:text-blue-400">Events</Link>
                  <Link href="/gallery" className="hover:text-blue-400">Gallery</Link>
                  <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                </nav>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">We are "The Sacreds"</h3>
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Alumni Of The Sacreds, All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}