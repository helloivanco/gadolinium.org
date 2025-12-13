'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import ClinicCard from '@/components/ClinicCard';
import { clinics, Clinic } from '@/data/clinics';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const categoryLabels: Record<string, string> = {
  all: 'All Clinics',
  northeast: 'Northeast, Great Lakes & Southeast',
  midwest: 'Northwest, Central Midwest',
  southwest: 'Southwest',
  westcoast: 'West Coast',
  international: 'International',
};

const ClinicsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredClinics = useMemo(() => {
    let filtered = clinics.filter((c) => c.category !== 'featured'); // Exclude featured from regular list

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((clinic) => clinic.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (clinic) =>
          clinic.name.toLowerCase().includes(query) ||
          clinic.clinicName?.toLowerCase().includes(query) ||
          clinic.city.toLowerCase().includes(query) ||
          clinic.state?.toLowerCase().includes(query) ||
          clinic.region.toLowerCase().includes(query) ||
          clinic.title?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const featuredClinic = useMemo(
    () => clinics.find((c) => c.category === 'featured'),
    []
  );

  return (
    <>
      <StructuredData
        pathname='/clinics'
        pageTitle='Chelation Clinics - Find Treatment Centers for Gadolinium Toxicity'
        pageDescription='Find chelation clinics and treatment centers for Gadolinium Deposition Disease (GDD) worldwide. Search by location, region, or specialty.'
      />
      <div className='min-h-screen bg-white'>
        {/* Header with Background Image */}
        <header className='relative bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100'>
          <div className='relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/chelation.webp'
              alt='Chelation therapy treatment'
              fill
              className='object-cover'
              priority
              sizes='100vw'
              quality={85}
            />
            {/* Overlay for better text readability */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10' />
            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center z-20'>
              <div className='relative max-w-7xl mx-auto px-6 sm:px-8 w-full'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight'>
                  Chelation Clinics
                </h1>
                <p className='text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl font-light leading-relaxed mb-8'>
                  GadTTRAC nonprofit corporation is organized exclusively for charitable
                  care, patient assistance, education, treatment, scientific, and
                  research purposes for patients with GDD (Gadolinium Deposition
                  Disease) and other heavy metal-induced diseases.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 items-center'>
                  <a
                    href='https://gadttrac.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300 hover:underline font-medium transition-all duration-200 flex items-center gap-2 group cursor-pointer relative z-30'
                    aria-label='Visit GadTTRAC website'>
                    gadttrac.org
                    <svg
                      className='w-4 h-4 group-hover:translate-x-0.5 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                  <span className='text-white/60 hidden sm:inline relative z-20'>•</span>
                  <a
                    href='https://gadttrac.org/gdd-treating-practices'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-blue-300 hover:underline font-medium transition-all duration-200 flex items-center gap-2 group cursor-pointer relative z-30'
                    aria-label='View full list of GDD treating practices'>
                    Full list of practices
                    <svg
                      className='w-4 h-4 group-hover:translate-x-0.5 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Subtle bottom fade */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
          </div>
        </header>

        <main
          id='main-content'
          className='max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16'
          role='main'
          aria-label='Main content'>
          {/* Search and Filter Section */}
          <div className='mb-16 space-y-8'>
            {/* Search Bar */}
            <div className='relative max-w-2xl'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                type='text'
                placeholder='Search by name, location, or region...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-shadow duration-200'
                aria-label='Search clinics'
              />
            </div>

            {/* Category Filters */}
            <div className='flex flex-wrap gap-3'>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                  }`}
                  aria-pressed={selectedCategory === key}
                  aria-label={`Filter by ${label}`}>
                  {label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className='text-gray-600 text-sm md:text-base'>
              Showing <span className='font-semibold text-gray-900'>{filteredClinics.length}</span> of{' '}
              <span className='font-semibold text-gray-900'>{clinics.length - 1}</span> clinics
              {featuredClinic && (
                <span className='text-gray-500 ml-2'>
                  (plus 1 featured specialist)
                </span>
              )}
            </div>
          </div>

          {/* Featured Clinic */}
          {featuredClinic && selectedCategory === 'all' && !searchQuery && (
            <div className='mb-20'>
              <div className='bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-12 hover:shadow-xl hover:border-gray-200 transition-all duration-300'>
                <div className='mb-10 rounded-2xl overflow-hidden ring-1 ring-black/5'>
                  <div className='relative w-full h-64 md:h-80 bg-gray-100'>
                    <Image
                      src='/iv.webp'
                      alt='Intravenous chelation therapy treatment'
                      fill
                      className='object-cover'
                      priority
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      quality={90}
                    />
                  </div>
                </div>
                <div className='text-center mb-10'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight'>
                    DR. RICHARD SEMELKA, WORLD RENOWN GDD SPECIALIST
                  </h2>
                </div>
                <ClinicCard {...featuredClinic} />
              </div>
            </div>
          )}

          {/* Clinics Grid */}
          {filteredClinics.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredClinics.map((clinic, index) => (
                <ClinicCard key={`${clinic.name}-${clinic.city}-${index}`} {...clinic} />
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <svg
                className='mx-auto h-16 w-16 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <h3 className='mt-6 text-xl font-semibold text-gray-900'>
                No clinics found
              </h3>
              <p className='mt-3 text-gray-600 max-w-md mx-auto'>
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
      </main>

      <Footer />
    </div>
    </>
  );
};

export default ClinicsPage;

