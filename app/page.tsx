import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
  description:
    'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals including Dr. Semelka (IV Chelation), Dr. Wagner (Kidney), and Dr. Catriona Walsh (Nutrition). Discover chelation clinics and connect with support groups.',
  keywords: [
    'gadolinium toxicity',
    'gadolinium detox',
    'MRI contrast toxicity',
    'gadolinium chelation',
    'gadolinium doctors',
    'gadolinium treatment',
    'gadolinium support groups',
    'Dr. Semelka',
    'Dr. Wagner',
    'Dr. Catriona Walsh',
    'chelation therapy',
    'gadolinium removal',
  ],
  openGraph: {
    title:
      'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
    description:
      'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals, chelation clinics, and support communities.',
    url: 'https://gadolinium.org',
    type: 'website',
    images: [
      {
        url: '/mri.webp',
        width: 1200,
        height: 630,
        alt: 'Gadolinium Toxicity Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
    description:
      'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals, chelation clinics, and support communities.',
    images: ['/mri.webp'],
  },
  alternates: {
    canonical: 'https://gadolinium.org',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData
        pathname='/'
        pageTitle='Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups'
        pageDescription='Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals including Dr. Semelka (IV Chelation), Dr. Wagner (Kidney), and Dr. Catriona Walsh (Nutrition). Discover chelation clinics and connect with support groups.'
      />
      <div className='min-h-screen bg-white'>
        <Hero />
        <main
          id='main-content'
          className='max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32'
          role='main'
          aria-label='Main content'>
          {/* Overview Intro */}
          <section className='mb-20 text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight'>
              Navigate Gadolinium Toxicity with Clarity
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
              Explore doctors, detox options, symptoms, practical remedies, clinics,
              and trusted resources — all curated for patients affected by
              gadolinium-based contrast agents.
            </p>
          </section>

          {/* Page Summaries Grid */}
          <section
            aria-label='Site sections overview'
            className='grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {/* Doctors */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/medical.jpg'
                  alt='Doctors treating gadolinium toxicity'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Core Care Team
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  Doctors
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Learn about leading specialists including Dr. Richard Semelka,
                  Dr. Brent Wagner, and Dr. Catriona Walsh — their backgrounds,
                  approaches, and how to reach them.
                </p>
                <Link
                  href='/doctors'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  View Doctors
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* What Helps */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/foods.webp'
                  alt='Healthy foods and natural remedies for gadolinium detoxification'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Day-to-day Support
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  What Helps
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Holistic guidance on diet, hydration, lifestyle, supplements, and
                  personalized protocols from leading experts for managing
                  gadolinium toxicity.
                </p>
                <Link
                  href='/what-helps'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  Explore What Helps
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Detox */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/detox.webp'
                  alt='Detox methods for gadolinium toxicity'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Structured Detox
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  Detox Methods
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Deep dive into IR sauna and niacin protocols, DTPA chelation,
                  and how to choose the right approach with medical guidance.
                </p>
                <Link
                  href='/detox'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  View Detox Options
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Symptoms */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/pain.jpg'
                  alt='Symptoms after gadolinium exposure'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Symptom Patterns
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  Symptoms
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Review patient survey data on early-phase NSF-like symptoms,
                  nervous system involvement, and key findings from published
                  research.
                </p>
                <Link
                  href='/symptoms'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  Explore Symptoms
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Clinics */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/chelation.webp'
                  alt='Chelation therapy treatment'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Where to Go
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  Chelation Clinics
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Browse GadTTRAC-linked clinics and treatment centers worldwide,
                  filter by region, and view a featured specialist clinic.
                </p>
                <Link
                  href='/clinics'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  Find Clinics
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Resources */}
            <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden flex flex-col'>
              <div className='relative w-full h-40'>
                <Image
                  src='/resources.jpg'
                  alt='Resources for gadolinium toxicity information and support'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm'>
                    Learn &amp; Connect
                  </p>
                </div>
              </div>
              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-3 tracking-tight'>
                  Resources &amp; Support
                </h2>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1'>
                  Access support groups, email communities, key websites,
                  Semelka&apos;s blog, and book recommendations to stay informed
                  and connected.
                </p>
                <Link
                  href='/resources'
                  className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base hover:bg-blue-700 active:bg-blue-800 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98] transition-all duration-200'>
                  View Resources
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
