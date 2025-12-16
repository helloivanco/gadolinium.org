import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import WhatHelpsSection from '@/components/WhatHelpsSection';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'What Helps - Remedies & Approaches for Gadolinium Toxicity',
  description:
    'Comprehensive guide to remedies and approaches for Gadolinium Deposition Disease (GDD) and toxicity. Learn about diet, hydration, lifestyle, supplements, and personalized treatment protocols from leading experts.',
  keywords: [
    'gadolinium toxicity remedies',
    'gadolinium detox',
    'gadolinium treatment',
    'gadolinium diet',
    'gadolinium supplements',
    'GDD treatment',
    'gadolinium chelation',
    'gadolinium lifestyle',
    'gadolinium recovery',
    'gadolinium detoxification',
  ],
  openGraph: {
    title: 'What Helps - Remedies & Approaches for Gadolinium Toxicity',
    description:
      'Comprehensive guide to remedies and approaches for Gadolinium Deposition Disease (GDD) and toxicity.',
    url: 'https://gadolinium.org/what-helps',
    type: 'article',
    images: [
      {
        url: '/foods.webp',
        width: 1200,
        height: 630,
        alt: 'What Helps - Remedies & Approaches for Gadolinium Toxicity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Helps - Remedies & Approaches for Gadolinium Toxicity',
    description:
      'Comprehensive guide to remedies and approaches for Gadolinium Deposition Disease (GDD) and toxicity.',
    images: ['/foods.webp'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/what-helps',
  },
};

const WhatHelpsPage = () => {
  return (
    <>
      <StructuredData
        pathname='/what-helps'
        pageTitle='What Helps - Remedies & Approaches for Gadolinium Toxicity'
        pageDescription='Comprehensive guide to remedies and approaches for Gadolinium Deposition Disease (GDD) and toxicity. Learn about diet, hydration, lifestyle, supplements, and personalized treatment protocols from leading experts.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100'>
          <div className='relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/foods.webp'
              alt='Healthy foods and natural remedies for gadolinium detoxification'
              fill
              className='object-cover'
              priority
              sizes='100vw'
              quality={85}
            />
            {/* Refined Gradient Overlay */}
            <div
              className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60'
              aria-hidden='true'></div>
            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
                <div className='text-center max-w-4xl mx-auto space-y-6'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight drop-shadow-lg'>
                    <span className='block'>What Helps</span>
                    <span className='block text-gray-100 mt-2 font-light'>
                      Remedies & Approaches for Gadolinium Toxicity
                    </span>
                  </h1>
                  <p className='text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md px-4'>
                    A holistic approach focusing on diet, lifestyle, and
                    supporting the body&apos;s natural processes
                  </p>
                </div>
              </div>
            </div>
            {/* Subtle bottom fade */}
            <div
              className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent'
              aria-hidden='true'></div>
          </div>
        </header>

        <main
          id='main-content'
          className='max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32'
          role='main'
          aria-label='Main content'>
          <WhatHelpsSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhatHelpsPage;
