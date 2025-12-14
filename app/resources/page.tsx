import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources - Gadolinium Toxicity Support & Information',
  description:
    'Comprehensive list of resources for gadolinium toxicity including Living With Gadolinium, support groups, Dr. Semelka blog, and GADTRAC.org.',
  keywords: [
    'gadolinium resources',
    'gadolinium support',
    'Living With Gadolinium',
    'Gadolinium64',
    'gadolinium Facebook groups',
    'Dr. Semelka blog',
    'GADTRAC',
    'gadolinium information',
  ],
  openGraph: {
    title: 'Resources - Gadolinium Toxicity Support & Information',
    description:
      'Comprehensive list of resources for gadolinium toxicity including support groups, blogs, and information websites.',
    url: 'https://gadolinium.org/resources',
    type: 'website',
    images: [
      {
        url: '/resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Gadolinium Toxicity Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources - Gadolinium Toxicity Support & Information',
    description:
      'Comprehensive list of resources for gadolinium toxicity including support groups, blogs, and information websites.',
    images: ['/resources.jpg'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/resources',
  },
};

const ResourcesPage = () => {
  return (
    <>
      <StructuredData
        pathname='/resources'
        pageTitle='Resources - Gadolinium Toxicity Support & Information'
        pageDescription='Comprehensive list of resources for gadolinium toxicity including Living With Gadolinium, support groups, Dr. Semelka blog, and GADTRAC.org.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-gradient-to-b from-gray-50 to-white border-b border-gray-100'>
          <div className='relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/resources.jpg'
              alt='Resources for gadolinium toxicity information and support'
              fill
              className='object-cover'
              priority
              sizes='100vw'
              quality={85}
            />
            {/* Overlay for text readability */}
            <div
              className='absolute inset-0 bg-black/40'
              aria-hidden='true'></div>
            {/* Content */}
            <div className='relative z-10 h-full flex items-center justify-center'>
              <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
                <div className='text-center max-w-4xl mx-auto'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight drop-shadow-lg'>
                    Resources
                  </h1>
                  <p className='text-xl md:text-2xl text-white leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md'>
                    Helpful links and resources for gadolinium toxicity
                    information and support
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
          {/* Organizations & Websites Section */}
          <section className='mb-20'>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight'>
              Organizations & Websites
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Living With Gadolinium, LLC
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  An organization dedicated to supporting individuals affected
                  by gadolinium toxicity and raising awareness about the
                  condition.
                </p>
                <Link
                  href='https://www.livingwithgadolinium.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                  <span>Visit Living With Gadolinium</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  LivingwithGadolinium.com
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  A comprehensive resource website providing information and
                  support for those living with gadolinium toxicity.
                </p>
                <Link
                  href='https://www.livingwithgadolinium.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                  <span>Visit LivingwithGadolinium.com</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Gadolinium64.com
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  A resource website focused on gadolinium toxicity information,
                  research, and community support.
                </p>
                <Link
                  href='https://www.gadolinium64.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                  <span>Visit Gadolinium64.com</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  GADTRAC.org
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  GADTRAC (Gadolinium Deposition Disease Tracking and Research)
                  provides resources and information about gadolinium deposition
                  disease.
                </p>
                <Link
                  href='https://www.gadtrac.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                  <span>Visit GADTRAC.org</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Support Groups Section */}
          <section className='mb-20'>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight'>
              Support Groups
            </h2>
            <div className='bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm'>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
                Facebook Groups
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Facebook hosts several active communities for individuals
                affected by gadolinium toxicity. These groups provide support,
                share experiences, and exchange information about treatments and
                doctors.
              </p>
              <div className='space-y-4'>
                <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                    MRI Gadolinium Contrast Safety Side Effects & Toxicity
                    Research
                  </h4>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    A research-focused Facebook group dedicated to discussing
                    gadolinium contrast safety, side effects, and toxicity
                    research.
                  </p>
                  <Link
                    href='https://www.facebook.com/groups/1431383276922546'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'
                    aria-label='Join MRI Gadolinium Contrast Safety Side Effects & Toxicity Research Facebook group'>
                    <span>Join Group</span>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </Link>
                </div>

                <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                    MRI Gadolinium Contrast Support Group
                  </h4>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    A supportive community for individuals affected by MRI
                    gadolinium contrast, sharing experiences and mutual support.
                  </p>
                  <Link
                    href='https://www.facebook.com/groups/3180876852210768'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'
                    aria-label='Join MRI Gadolinium Contrast Support Group on Facebook'>
                    <span>Join Group</span>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Groups.io Section */}
            <div className='bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm mt-8'>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
                Email Support Group
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                A support group for people affected by gadolinium toxicity from
                Gadolinium-based Contrast Agents (GBCAs). Formed in 2012,
                members share support and information about dealing with
                symptoms. Membership requires application or invitation.
              </p>
              <div className='space-y-4'>
                <Link
                  href='https://mri-gadolinium-toxicity.groups.io/g/Support'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'
                  aria-label='Join MRI-Gadolinium-Toxicity support group on Groups.io'>
                  <span>Join the Support Group</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
                <p className='text-sm text-gray-600 mt-4'>
                  Email:{' '}
                  <a
                    href='mailto:Support@MRI-Gadolinium-Toxicity.groups.io'
                    className='text-blue-600 hover:text-blue-700 underline transition-colors duration-200'>
                    Support@MRI-Gadolinium-Toxicity.groups.io
                  </a>
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-gray-100'>
                <p className='text-xs text-gray-500 italic leading-relaxed'>
                  <strong className='text-gray-700 font-medium'>
                    Disclaimer:
                  </strong>{' '}
                  This group is for informational purposes only. Content is not
                  medical or legal advice and represents the opinions of the
                  original authors.
                </p>
              </div>
            </div>
          </section>

          {/* Medical Resources Section */}
          <section className='mb-20'>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight'>
              Medical Resources & Blogs
            </h2>
            <div className='bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm'>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
                Dr. Richard Semelka Blog
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Dr. Richard Semelka, MD, is a leading expert in gadolinium
                toxicity and has published extensively on DTPA chelation therapy
                for Gadolinium Deposition Disease (GDD). His detailed blog posts
                explain protocols, rationale, and important considerations for
                chelation therapy and gadolinium toxicity treatment.
              </p>
              <Link
                href='https://www.richardsemelka.com/single-post/chelation-with-dtpa'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                <span>Read Dr. Semelka&apos;s Blog</span>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </Link>
            </div>
          </section>

          {/* Book Recommendation */}
          <section id='book' className='mb-20'>
            <div className='bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start'>
                {/* Book Image */}
                <div className='w-full md:w-1/3 flex-shrink-0'>
                  <div className='relative w-full aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-300'>
                    <Image
                      src='/gadtoxicity-book.jpg'
                      alt='Gadolinium Deposition and Toxicity: Humanizing a Life-Changing Event by Debbie Heist Lambert'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                    Gadolinium Deposition and Toxicity: Humanizing a
                    Life-Changing Event
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    <strong>By Debbie Heist Lambert</strong>
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                    This book offers a patient perspective on gadolinium
                    deposition and toxicity, humanizing this life-changing event
                    through personal experiences shared by patients from around
                    the world. The heartfelt stories in these pages represent
                    real examples of adverse reactions and events following one
                    or more injections of GBCA (gadolinium-based contrast
                    agent).
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                    Through these personal accounts, the book provides insight
                    into the signs, side-effects, symptoms, and associations
                    that patients report, highlighting what industry knows and
                    doesn&apos;t know, where gaps exist, and where to go to
                    learn more. The authors hope these stories will create new
                    awareness and generate open dialogue about the use of
                    gadolinium in medical imaging.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    The book emphasizes the importance of{' '}
                    <strong>#InformedConsent</strong>, <strong>#Truth</strong>,
                    and <strong>#Transparency</strong> as gold standards in
                    healthcare. It reminds readers that gadolinium is a toxic
                    rare earth metal with no biological reason to ever be found
                    in the human body, and encourages patients to ask questions,
                    be curious, and be advocates for themselves and their loved
                    ones.
                  </p>
                  <a
                    href='https://amzn.to/4aL7oKz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                    <span>View Book on Amazon</span>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResourcesPage;
