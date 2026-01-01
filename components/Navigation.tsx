'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      className='bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 supports-[backdrop-filter]:bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.05)]'
      role='navigation'
      aria-label='Main navigation'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='flex items-center justify-between h-18 md:h-20'>
          <Link
            href='/'
            className='flex items-center gap-3 group'
            aria-label='Gadolinium.org Home'>
            <div className='w-9 h-9 md:w-10 md:h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105'>
              <Image
                src='/logo.png'
                alt='Gadolinium.org Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
            <span className='text-lg md:text-xl font-semibold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
              Gadolinium.org
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-0.5'>
            <Link
              href='/'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Home
            </Link>
            <Link
              href='/doctors'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Doctors
            </Link>
            <Link
              href='/what-helps'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              What Helps
            </Link>
            <Link
              href='/detox'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Detox
            </Link>
            <Link
              href='/symptoms'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Symptoms
            </Link>
            <Link
              href='/clinics'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Clinics
            </Link>
            <Link
              href='/resources'
              className='px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.96]'>
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className='md:hidden p-2.5 -mr-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.94]'
            aria-label='Toggle menu'
            aria-expanded={isOpen}>
            {isOpen ? (
              <X className='w-6 h-6' aria-hidden='true' />
            ) : (
              <Menu className='w-6 h-6' aria-hidden='true' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-5 border-t border-gray-200/50 animate-in slide-in-from-top-2 duration-300'>
            <div className='flex flex-col space-y-0.5'>
              <Link
                href='/'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                Home
              </Link>
              <Link
                href='/doctors'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                Doctors
              </Link>
              <Link
                href='/detox'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                Detox
              </Link>
              <Link
                href='/what-helps'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                What Helps
              </Link>
              <Link
                href='/symptoms'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                Symptoms
              </Link>
              <Link
                href='/clinics'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
                Clinics
              </Link>
              <Link
                href='/resources'
                onClick={handleLinkClick}
                className='px-5 py-3.5 text-base font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100/60 transition-all duration-300 active:scale-[0.97]'>
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
