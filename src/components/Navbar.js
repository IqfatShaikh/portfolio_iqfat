'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900 border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Iqfat Shaikh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}