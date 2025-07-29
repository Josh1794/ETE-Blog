'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-2'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>E</span>
            </div>
            <span className='text-xl font-bold text-gray-900'>
              Elizabeth&apos;s Wedding Blog
            </span>
          </Link>

          {/* Right side - Desktop Navigation and Mobile Menu */}
          <div className='flex items-center '>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              <Link
                href='/'
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                Home
              </Link>
              <Link
                href='/blog'
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                Planning Tips
              </Link>
              <Link
                href='/about'
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                About
              </Link>
              <Link
                href='/contact'
                className='text-gray-700 hover:text-blue-600 transition-colors'
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={toggleMobileMenu}
                className='p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors'
                aria-label='Toggle mobile menu'
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200'>
            {/* Mobile Navigation Links */}
            <Link
              href='/'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/blog'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planning Tips
            </Link>
            <Link
              href='/about'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/contact'
              className='block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
