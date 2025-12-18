import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Leading Doctors for Gadolinium Toxicity & GDD',
  description:
    'Meet leading medical professionals treating gadolinium toxicity and Gadolinium Deposition Disease (GDD), including Dr. Richard Semelka, Dr. Brent Wagner, and Dr. Catriona Walsh.',
  keywords: [
    'gadolinium doctors',
    'GDD specialists',
    'gadolinium toxicity treatment doctors',
    'Dr. Richard Semelka',
    'Dr. Brent Wagner',
    'Dr. Catriona Walsh',
    'gadolinium deposition disease',
    'gadolinium toxicity specialists',
    'gadolinium treatment physicians',
    'GBCA toxicity doctors',
    'chelation therapy doctors',
    'gadolinium expert physicians',
  ],
  openGraph: {
    title: 'Leading Doctors for Gadolinium Toxicity & GDD',
    description:
      'Learn about the leading doctors and specialists treating gadolinium toxicity and Gadolinium Deposition Disease (GDD).',
    url: 'https://gadolinium.org/doctors',
    type: 'article',
    images: [
      {
        url: '/medical.jpg',
        width: 1200,
        height: 630,
        alt: 'Medical professionals treating gadolinium toxicity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading Doctors for Gadolinium Toxicity & GDD',
    description:
      'Meet experts in gadolinium toxicity and Gadolinium Deposition Disease (GDD).',
    images: ['/medical.jpg'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/doctors',
  },
};

const DoctorsPage = () => {
  return (
    <>
      <StructuredData
        pathname='/doctors'
        pageTitle='Leading Doctors for Gadolinium Toxicity & GDD'
        pageDescription='Meet leading medical professionals treating gadolinium toxicity and Gadolinium Deposition Disease (GDD), including Dr. Richard Semelka, Dr. Brent Wagner, and Dr. Catriona Walsh.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-white'>
          <div className='relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/medical.jpg'
              alt='Medical professionals caring for patients with gadolinium toxicity'
              fill
              className='object-cover'
              priority
              sizes='100vw'
              quality={85}
            />
            {/* Refined Gradient Overlay - Apple-style subtle depth */}
            <div
              className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65'
              aria-hidden='true'></div>
            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
                <div className='text-center max-w-4xl mx-auto space-y-8'>
                  <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'>
                    <span className='block'>Leading Doctors</span>
                    <span className='block text-white/95 mt-3 font-light text-4xl md:text-5xl lg:text-6xl'>
                      For Gadolinium Toxicity &amp; GDD
                    </span>
                  </h1>
                  <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                    Expert care from specialists dedicated to understanding and
                    treating gadolinium toxicity.
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
          <DoctorsSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DoctorsPage;


