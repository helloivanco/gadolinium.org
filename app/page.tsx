import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import { ChevronRight } from 'lucide-react';
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
    'Gadolinium Deposition Disease',
    'GDD',
    'gadolinium-based contrast agents',
    'GBCA toxicity',
    'gadolinium symptoms',
    'gadolinium detoxification',
    'gadolinium resources',
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
          <section className='mb-24 text-center'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.1]'>
              Navigate Gadolinium Toxicity with Clarity
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
              Explore doctors, detox options, symptoms, practical remedies,
              clinics, and trusted resources — all curated for patients affected
              by gadolinium-based contrast agents.
            </p>
          </section>

          {/* Page Summaries Grid */}
          <section
            aria-label='Site sections overview'
            className='grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {/* Doctors */}
            <Link
              href='/doctors'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/medical.jpg'
                  alt='Doctors treating gadolinium toxicity'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Core Care Team
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Doctors
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Learn about leading specialists including Dr. Richard Semelka,
                  Dr. Brent Wagner, and Dr. Catriona Walsh — their backgrounds,
                  approaches, and how to reach them.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  View Doctors
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>

            {/* What Helps */}
            <Link
              href='/what-helps'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/foods.webp'
                  alt='Healthy foods and natural remedies for gadolinium detoxification'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Day-to-day Support
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  What Helps
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Holistic guidance on diet, hydration, lifestyle, supplements,
                  and personalized protocols from leading experts for managing
                  gadolinium toxicity.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  Explore What Helps
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>

            {/* Detox */}
            <Link
              href='/detox'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/detox.webp'
                  alt='Detox methods for gadolinium toxicity'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Structured Detox
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Detox Methods
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Deep dive into IR sauna and niacin protocols, DTPA chelation,
                  and how to choose the right approach with medical guidance.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  View Detox Options
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>

            {/* Symptoms */}
            <Link
              href='/symptoms'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/pain.jpg'
                  alt='Symptoms after gadolinium exposure'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Symptom Patterns
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Symptoms
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Review patient survey data on early-phase NSF-like symptoms,
                  nervous system involvement, and key findings from published
                  research.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  Explore Symptoms
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>

            {/* Clinics */}
            <Link
              href='/clinics'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/chelation.webp'
                  alt='Chelation therapy treatment'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Where to Go
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Chelation Clinics
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Browse GadTTRAC-linked clinics and treatment centers
                  worldwide, filter by region, and view a featured specialist
                  clinic.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  Find Clinics
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>

            {/* Resources */}
            <Link
              href='/resources'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-40 overflow-hidden'>
                <Image
                  src='/resources.jpg'
                  alt='Resources for gadolinium toxicity information and support'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    Learn &amp; Connect
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Resources &amp; Support
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Access support groups, email communities, key websites,
                  Semelka&apos;s blog, and book recommendations to stay informed
                  and connected.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  View Resources
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>
          </section>

          {/* Other Tools Section */}
          <section className='mt-24'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight'>
                Other Tools
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Additional resources to help you understand and manage your
                health
              </p>
            </div>
            <div className='grid gap-8 md:gap-10 md:grid-cols-1 lg:grid-cols-1'>
              {/* DNA Checker Tool */}
              <Link
                href='/dna-checker'
                className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
                <div className='relative w-full h-40 overflow-hidden'>
                  <Image
                    src='/dna.jpg'
                    alt='DNA checker tool for genetic variants'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                    sizes='100vw'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                      Free Tool
                    </p>
                  </div>
                </div>
                <div className='p-7 md:p-8 flex flex-col flex-1'>
                  <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                    DNA Raw Data Checker
                  </h3>
                  <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                    Upload your DNA raw data file from 23andMe, AncestryDNA, or
                    other providers to automatically scan for histamine and
                    MCAS-related genetic variants. All processing happens
                    locally in your browser—your DNA data never leaves your
                    device.
                  </p>
                  <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                    Check Your DNA File
                    <ChevronRight
                      className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                      aria-hidden='true'
                    />
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section className='mt-24'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight'>
                About Gadolinium.org
              </h2>
            </div>

            <Link
              href='/about'
              className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
              <div className='relative w-full h-48 overflow-hidden'>
                <Image
                  src='/time.jpg'
                  alt='About the story behind Gadolinium.org'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='100vw'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <p className='inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-gray-900 shadow-lg'>
                    100% Human
                  </p>
                </div>
              </div>
              <div className='p-7 md:p-8 flex flex-col flex-1'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                  Why I built this site
                </h3>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
                  Read how Gadolinium.org was created as a free resource by
                  someone personally affected by gadolinium toxicity, and how
                  affiliate earnings and personal donations are directed toward
                  research and support.
                </p>
                <span className='inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm md:text-base group-hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] group-hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300'>
                  Visit About Page
                  <ChevronRight
                    className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
