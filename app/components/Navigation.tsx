'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-indigo-600 to-blue-600'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className={`text-2xl font-bold font-sans ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Sympazy
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-indigo-600' 
                  : 'text-white hover:text-indigo-200'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-indigo-600' 
                  : 'text-white hover:text-indigo-200'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/privacy-policy" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-indigo-600' 
                  : 'text-white hover:text-indigo-200'
              }`}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-indigo-600' 
                  : 'text-white hover:text-indigo-200'
              }`}
            >
              Terms of Service
            </Link>
          </div>
          <div className="md:hidden">
            <button className={`p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 