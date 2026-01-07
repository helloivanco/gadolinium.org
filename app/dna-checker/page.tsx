import DNAChecker from '@/components/DNAChecker';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Check Your DNA Raw Data | Histamine & MCAS Genetic Variants',
  description:
    'Upload and check your DNA raw data file for histamine intolerance and MCAS-related genetic variants. Free, private, and secure - all processing happens locally in your browser. Supports 23andMe, AncestryDNA, and other providers.',
  keywords: [
    'DNA raw data checker',
    'DNA file upload',
    'histamine genetics',
    'MCAS genetics',
    '23andMe raw data',
    'AncestryDNA raw data',
    'genetic variant checker',
    'histamine intolerance genetics',
    'DNA analysis tool',
    'genetic testing',
    'SNP checker',
    'DNA file processor',
    'private DNA analysis',
    'local DNA processing',
  ],
  openGraph: {
    title: 'Check Your DNA Raw Data | Histamine & MCAS Genetic Variants',
    description:
      'Upload and check your DNA raw data file for histamine intolerance and MCAS-related genetic variants. Free, private, and secure.',
    url: 'https://gadolinium.org/dna-checker',
    type: 'website',
    images: [
      {
        url: '/dna.jpg',
        width: 1200,
        height: 630,
        alt: 'Check Your DNA Raw Data for Histamine & MCAS Variants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Check Your DNA Raw Data | Histamine & MCAS Genetic Variants',
    description:
      'Upload and check your DNA raw data file for histamine intolerance and MCAS-related genetic variants. Free, private, and secure.',
    images: ['/dna.jpg'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/dna-checker',
  },
};

const DNACheckPage = () => {
  return (
    <>
      <StructuredData
        pathname='/dna-checker'
        pageTitle='Check Your DNA Raw Data | Histamine & MCAS Genetic Variants'
        pageDescription='Upload and check your DNA raw data file for histamine intolerance and MCAS-related genetic variants. Free, private, and secure - all processing happens locally in your browser.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-white'>
          <div className='relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/dna.jpg'
              alt='DNA and genetic testing for histamine metabolism'
              fill
              className='object-cover'
              priority
              sizes='100vw'
              quality={85}
            />
            {/* Gradient Overlay */}
            <div
              className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65'
              aria-hidden='true'></div>
            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
                <div className='text-center max-w-4xl mx-auto space-y-6'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'>
                    Check Your DNA Raw Data
                  </h1>
                  <p className='text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                    Analyze Your Genetic Variants for Histamine & MCAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main
          id='main-content'
          className='max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32'
          role='main'
          aria-label='Main content'>
          {/* Back Link */}
          <div className='mb-12'>
            <Link
              href='/dna-histamine-mcas'
              className='inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group'>
              <ChevronLeft
                className='w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1'
                aria-hidden='true'
              />
              <span className='font-medium'>Back to Genetic Factors Guide</span>
            </Link>
          </div>

          {/* Introduction */}
          <section className='mb-16'>
            <div className='prose prose-lg max-w-none text-gray-700'>
              <p className='text-xl text-gray-600 leading-relaxed mb-6'>
                Upload your DNA raw data file to automatically scan for
                histamine, MCAS, and hEDS/HSD-related genetic variants. This
                tool checks multiple key SNPs across several categories and
                shows you which variants you carry, along with your specific
                genotypes. All processing happens locally in your browser—your
                DNA data never leaves your device.
              </p>
            </div>
          </section>

          {/* DNA File Checker */}
          <div className='mb-16'>
            <DNAChecker />
          </div>

          {/* How to Get Your DNA Raw Data File */}
          <section className='mb-12 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-3xl border border-blue-200/60 p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='text-3xl'>📥</span>
              <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                How to Get Your DNA Raw Data File
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              {/* 23andMe Instructions */}
              <div className='bg-white rounded-2xl p-6 border border-blue-200/60 shadow-sm'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='text-2xl'>🧬</span>
                  23andMe
                </h3>
                <ol className='space-y-3 text-gray-700 list-decimal list-inside'>
                  <li>Log in to your 23andMe account</li>
                  <li>
                    Go to <strong>Tools</strong> →{' '}
                    <strong>Browse Raw Data</strong>
                  </li>
                  <li>
                    Click <strong>&quot;Download&quot;</strong> at the top of
                    the page
                  </li>
                  <li>
                    Select <strong>&quot;All DNA&quot;</strong> or{' '}
                    <strong>&quot;Ancestry&quot;</strong>
                  </li>
                  <li>
                    Choose <strong>&quot;Download Raw Data&quot;</strong>
                  </li>
                  <li>Enter your password to confirm</li>
                  <li>
                    Wait for the email with your download link (usually arrives
                    within minutes)
                  </li>
                  <li>
                    Download the <strong>.txt</strong> file to your computer
                  </li>
                </ol>
                <p className='mt-4 text-sm text-gray-600 italic'>
                  Note: The file will be named something like
                  &quot;genome_YourName_v5_Full_YYYYMMDD.txt&quot;
                </p>
              </div>

              {/* AncestryDNA Instructions */}
              <div className='bg-white rounded-2xl p-6 border border-blue-200/60 shadow-sm'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='text-2xl'>🌳</span>
                  AncestryDNA
                </h3>
                <ol className='space-y-3 text-gray-700 list-decimal list-inside'>
                  <li>Log in to your Ancestry account</li>
                  <li>
                    Go to <strong>DNA</strong> →{' '}
                    <strong>Your DNA Results Summary</strong>
                  </li>
                  <li>
                    Click on <strong>&quot;Settings&quot;</strong> (gear icon)
                  </li>
                  <li>
                    Scroll down to <strong>&quot;Actions&quot;</strong> section
                  </li>
                  <li>
                    Click <strong>&quot;Download Raw DNA Data&quot;</strong>
                  </li>
                  <li>Enter your password to confirm</li>
                  <li>Check your email for the download link</li>
                  <li>
                    Download the <strong>.txt</strong> file to your computer
                  </li>
                </ol>
                <p className='mt-4 text-sm text-gray-600 italic'>
                  Note: The file will be named something like
                  &quot;AncestryDNA.txt&quot; or
                  &quot;Ancestry_dna_file_YYYYMMDD.txt&quot;
                </p>
              </div>
            </div>
            <div className='mt-6 bg-amber-50/80 rounded-2xl p-6 border border-amber-200/60'>
              <div className='flex items-start gap-3'>
                <span className='text-2xl'>💡</span>
                <div>
                  <p className='font-semibold text-gray-900 mb-2'>
                    Important Notes:
                  </p>
                  <ul className='space-y-1 text-gray-700 text-sm list-disc list-inside'>
                    <li>
                      Make sure you download the <strong>raw data</strong> file,
                      not a report or summary
                    </li>
                    <li>
                      The file should be a <strong>.txt</strong> file (text
                      format)
                    </li>
                    <li>File sizes are typically 5-50MB</li>
                    <li>
                      If you have multiple DNA tests, use the most recent one
                    </li>
                    <li>
                      Processing happens entirely in your browser—your data
                      never leaves your device
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Learn More Section */}
          <section className='mt-16 bg-gray-50/80 rounded-3xl border border-gray-200/60 p-8 md:p-10'>
            <div className='text-center'>
              <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4'>
                Want to Learn More About These Genetic Variants?
              </h2>
              <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
                Visit our comprehensive guide to understand what each genetic
                variant means, how it affects histamine metabolism, and what you
                can do about it.
              </p>
              <Link
                href='/dna-histamine-mcas'
                className='inline-flex items-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
                View Complete Genetic Factors Guide
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DNACheckPage;

