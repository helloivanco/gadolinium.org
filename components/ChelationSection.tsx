import { clinics } from '@/data/clinics';
import Image from 'next/image';
import Link from 'next/link';
import ClinicCard from './ClinicCard';

const ChelationSection = () => {
  const featuredClinic = clinics.find((c) => c.category === 'featured');
  const previewClinics = clinics
    .filter((c) => c.category !== 'featured')
    .slice(0, 6);

  return (
    <section className='mb-32' aria-labelledby='chelation-heading'>
      <div className='text-center mb-20'>
        <h2
          id='chelation-heading'
          className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight'>
          Chelation Clinics
        </h2>
        <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8'>
          GadTTRAC nonprofit corporation is organized exclusively for charitable
          care, patient assistance, education, treatment, scientific, and
          research purposes for patients with GDD (Gadolinium Deposition
          Disease) and other heavy metal-induced diseases.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a
            href='https://gadttrac.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 hover:underline font-medium transition-all duration-200 flex items-center gap-2 group'
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
          <span className='text-gray-300 hidden sm:inline'>•</span>
          <a
            href='https://gadttrac.org/gdd-treating-practices'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 hover:underline font-medium transition-all duration-200 flex items-center gap-2 group'
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

      {/* Featured Section - Dr. Semelka */}
      {featuredClinic && (
        <div className='mb-20'>
          <div className='bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-12 hover:shadow-xl hover:border-gray-200 transition-all duration-300'>
            <div className='mb-10 rounded-2xl overflow-hidden ring-1 ring-black/5'>
              <div className='relative w-full h-64 md:h-80 bg-gray-100'>
                <Image
                  src='/iv.webp'
                  alt='Intravenous chelation therapy for gadolinium removal'
                  fill
                  className='object-cover'
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  quality={90}
                />
              </div>
            </div>
            <div className='text-center mb-10'>
              <h3 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight'>
                DR. RICHARD SEMELKA, WORLD RENOWN GDD SPECIALIST
              </h3>
            </div>
            <ClinicCard {...featuredClinic} />
          </div>
        </div>
      )}

      {/* Preview Clinics */}
      <div className='mb-12'>
        <div className='flex items-center justify-between mb-10'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight'>
            Treatment Centers
          </h3>
          <Link
            href='/clinics'
            className='text-blue-600 hover:text-blue-700 font-medium flex items-center group transition-colors duration-200'>
            View All Clinics
            <svg
              className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {previewClinics.map((clinic, index) => (
            <ClinicCard key={index} {...clinic} />
          ))}
        </div>
        <div className='mt-12 text-center'>
          <Link
            href='/clinics'
            className='inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md'>
            View All {clinics.length} Clinics
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChelationSection;
