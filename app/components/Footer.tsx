'use client';

import Link from "next/link";

function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
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
              © <CopyrightYear /> Alumni Of The Sacreds, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}