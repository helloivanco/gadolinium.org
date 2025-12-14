import ChelationSection from '@/components/ChelationSection';
import Disclaimer from '@/components/Disclaimer';
import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import SupportGroupsSection from '@/components/SupportGroupsSection';
import type { Metadata } from 'next';

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
          <DoctorsSection />
          <ChelationSection />
          <SupportGroupsSection />
          <Disclaimer />
        </main>
        <Footer />
      </div>
    </>
  );
}
