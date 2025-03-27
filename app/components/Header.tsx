'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const showLogo = pathname !== '/';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {showLogo && (
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Sacred Heart Logo"
                  width={200}
                  height={75}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            )}
          </div>
          <div className="flex items-center justify-end flex-1">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 ml-4"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}