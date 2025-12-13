import Hero from '@/components/Hero';
import DoctorsSection from '@/components/DoctorsSection';
import ChelationSection from '@/components/ChelationSection';
import SupportGroupsSection from '@/components/SupportGroupsSection';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

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
