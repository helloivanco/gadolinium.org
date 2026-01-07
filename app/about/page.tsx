import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Gadolinium.org',
  description:
    'Learn about Gadolinium.org and our mission to provide information and support for those affected by gadolinium toxicity.',
  keywords: [
    'about gadolinium.org',
    'gadolinium toxicity information',
    'gadolinium support',
    'gadolinium resources',
  ],
  openGraph: {
    title: 'About Gadolinium.org',
    description:
      'Learn about Gadolinium.org and our mission to provide information and support for those affected by gadolinium toxicity.',
    url: 'https://gadolinium.org/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Gadolinium.org',
    description:
      'Learn about Gadolinium.org and our mission to provide information and support for those affected by gadolinium toxicity.',
  },
  alternates: {
    canonical: 'https://gadolinium.org/about',
  },
};

const AboutPage = () => {
  return (
    <>
      <StructuredData
        pathname='/about'
        pageTitle='About Gadolinium.org'
        pageDescription='Learn about Gadolinium.org and our mission to provide information and support for those affected by gadolinium toxicity.'
      />
      <div className='min-h-screen bg-white'>
        <main
          id='main-content'
          className='max-w-4xl mx-auto px-6 sm:px-8 py-24 md:py-32'
          role='main'
          aria-label='Main content'>
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-12 tracking-tight'>
              About Gadolinium.org
            </h1>

            {/* Doctor Visit Image */}
            <div className='mb-12'>
              <div className='relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'>
                <Image
                  src='/dr_visit.jpg'
                  alt='At Kidney Institute of New Mexico participating in their toxic exposures registry'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 800px'
                />
              </div>
              <p className='text-sm text-gray-600 text-center mt-4 max-w-2xl mx-auto leading-relaxed'>
                At Kidney Institute of New Mexico participating in their{' '}
                <Link
                  href='/gadregistry.jpg'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors duration-200'>
                  toxic exposures registry
                </Link>
              </p>
            </div>

            {/* 100% Human Heading */}
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight'>
              100% Human
            </h2>

            {/* Main Content */}
            <div className='text-gray-700 leading-relaxed space-y-6 text-lg'>
              <p>
                Gadolinium.org was created as a free resource for those affected
                by gadolinium toxicity.
              </p>

              <p>
                The information presented is organized and shared based on my
                personal experiences with gadolinium toxicity and from
                information shared by others affected by this unfortunate health
                issue which the medical community is only slowly waking up to.
              </p>

              <p>
                This website was built with the help of AI and is provided for
                educational purposes only. All affiliate link profits will be
                donated to Gadolinium research and support, and I also make
                personal donations to these causes.
              </p>

              <p className='text-gray-600 italic'>
                Please consult with qualified healthcare professionals.
              </p>
            </div>

            {/* Donation Image */}
            <div className='mt-12'>
              <div className='relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'>
                <Image
                  src='/donation.png'
                  alt='Donation thank you card'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 800px'
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

