import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button
            className="rounded-md p-2 hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/events"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;