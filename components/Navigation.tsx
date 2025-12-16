'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className='bg-white/90 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 supports-[backdrop-filter]:bg-white/70 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
      role='navigation'
      aria-label='Main navigation'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          <Link
            href='/'
            className='flex items-center gap-3 group'
            aria-label='Gadolinium.org Home'>
            <div className='w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0'>
              <Image
                src='/logo.svg'
                alt='Gadolinium.org Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
            <span className='text-lg md:text-xl font-semibold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200'>
              Gadolinium.org
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Home
            </Link>
            <Link
              href='/doctors'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Doctors
            </Link>
            <Link
              href='/what-helps'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              What Helps
            </Link>
            <Link
              href='/detox'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Detox
            </Link>
            <Link
              href='/symptoms'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Symptoms
            </Link>
            <Link
              href='/clinics'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Clinics
            </Link>
            <Link
              href='/resources'
              className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className='md:hidden p-2 -mr-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.95]'
            aria-label='Toggle menu'
            aria-expanded={isOpen}>
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {isOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-gray-200/60 animate-in slide-in-from-top-2 duration-200'>
            <div className='flex flex-col space-y-1'>
              <Link
                href='/'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Home
              </Link>
              <Link
                href='/doctors'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Doctors
              </Link>
              <Link
                href='/detox'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Detox
              </Link>
              <Link
                href='/what-helps'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                What Helps
              </Link>
              <Link
                href='/symptoms'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Symptoms
              </Link>
              <Link
                href='/clinics'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Clinics
              </Link>
              <Link
                href='/resources'
                onClick={handleLinkClick}
                className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-all duration-200 active:scale-[0.98]'>
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
