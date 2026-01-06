import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checking DNA Raw Data (Histamine/MCAS) | Genetic Factors',
  description:
    'Guide to checking DNA raw data for histamine intolerance and MCAS-related genetic variants. Learn about DAO, HNMT, MTHFR, COMT, and IL6 SNPs that may affect histamine metabolism and detoxification.',
  keywords: [
    'DNA raw data',
    'histamine intolerance',
    'MCAS genetics',
    'DAO gene',
    'HNMT gene',
    'MTHFR',
    'COMT',
    'IL6',
    'histamine metabolism',
    'genetic testing',
    'SNP analysis',
    'gadolinium toxicity genetics',
    'mast cell activation',
  ],
  openGraph: {
    title: 'Checking DNA Raw Data (Histamine/MCAS) | Genetic Factors',
    description:
      'Guide to checking DNA raw data for histamine intolerance and MCAS-related genetic variants.',
    url: 'https://gadolinium.org/dna-histamine-mcas',
    type: 'article',
    images: [
      {
        url: '/medical.jpg',
        width: 1200,
        height: 630,
        alt: 'Checking DNA Raw Data for Histamine/MCAS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checking DNA Raw Data (Histamine/MCAS) | Genetic Factors',
    description:
      'Guide to checking DNA raw data for histamine intolerance and MCAS-related genetic variants.',
    images: ['/medical.jpg'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/dna-histamine-mcas',
  },
};

const DNAHistamineMCASPage = () => {
  return (
    <>
      <StructuredData
        pathname='/dna-histamine-mcas'
        pageTitle='Checking DNA Raw Data (Histamine/MCAS) | Genetic Factors'
        pageDescription='Guide to checking DNA raw data for histamine intolerance and MCAS-related genetic variants. Learn about DAO, HNMT, MTHFR, COMT, and IL6 SNPs that may affect histamine metabolism and detoxification.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-white'>
          <div className='relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/medical.jpg'
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
                    Checking DNA Raw Data
                  </h1>
                  <p className='text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                    Histamine/MCAS Genetic Variants
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
              href='/what-helps'
              className='inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group'>
              <ChevronLeft
                className='w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1'
                aria-hidden='true'
              />
              <span className='font-medium'>Back to What Helps</span>
            </Link>
          </div>

          {/* Introduction */}
          <section className='mb-16'>
            <div className='prose prose-lg max-w-none text-gray-700'>
              <p className='text-xl text-gray-600 leading-relaxed mb-6'>
                Understanding your genetic variants can help explain why you may
                experience histamine intolerance or mast cell activation
                symptoms. This guide covers key SNPs (single nucleotide
                polymorphisms) that you can check in your DNA raw data from
                services like 23andMe, AncestryDNA, or other genetic testing
                providers.
              </p>
            </div>
          </section>

          {/* Main Content Sections */}
          <div className='space-y-12'>
            {/* 1. Gut Histamine (DAO) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟢</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  1) Gut Histamine (DAO) — Food Histamine Tolerance
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  <strong>DAO (Diamine Oxidase)</strong> is the enzyme
                  responsible for breaking down histamine from food in the gut.
                  Variants in the AOC1/DAO gene can affect your ability to
                  tolerate histamine-rich foods.
                </p>
                <div className='bg-green-50/80 rounded-2xl p-6 border border-green-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs10156191 (AOC1/DAO)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>May mean slower breakdown of histamine from food</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1049793 (AOC1/DAO)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>May mean lower DAO activity</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs2052129 (AOC1/DAO promoter)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>May mean lower DAO production</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Brain/Organ Histamine (HNMT) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🔵</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  2) Brain/Organ Histamine (HNMT) — &quot;Internal&quot;
                  Histamine Clearance
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  <strong>HNMT (Histamine N-Methyltransferase)</strong> clears
                  histamine in tissues and the brain. This variant is often
                  discussed in relation to sleep and anxiety symptoms.
                </p>
                <div className='bg-blue-50/80 rounded-2xl p-6 border border-blue-200/60'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs11558538 (HNMT)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>
                      May mean slower histamine clearance in tissues/brain
                      (often discussed with sleep/anxiety symptoms)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Methylation (MTHFR) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟣</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  3) Methylation (MTHFR) — Supports Detox + Neurotransmitters
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  <strong>MTHFR (Methylenetetrahydrofolate Reductase)</strong>{' '}
                  plays a crucial role in folate metabolism, which supports
                  detoxification pathways and neurotransmitter production.
                </p>
                <div className='bg-purple-50/80 rounded-2xl p-6 border border-purple-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1801133 (MTHFR C677T)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A
                    </p>
                    <p>May mean reduced folate conversion</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1801131 (MTHFR A1298C)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>
                      May affect BH4-related pathways (mood/detox discussions)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Stress + Inflammation */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟡</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  4) Stress + Inflammation (Can Worsen Flares)
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  These variants can affect how your body handles stress and
                  inflammation, which can worsen histamine and MCAS flares.
                </p>
                <div className='bg-yellow-50/80 rounded-2xl p-6 border border-yellow-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs4680 (COMT)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A/A
                    </p>
                    <p>May mean slower stress hormone/catechol metabolism</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1800795 (IL6)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>May mean higher inflammatory tendency</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Testing Required */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-red-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-red-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>⚠️</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  Not in Typical Raw SNP Lists (Needs Special Testing)
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  These conditions require specialized testing beyond standard
                  DNA raw data analysis:
                </p>
                <div className='bg-red-50/80 rounded-2xl p-6 border border-red-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      TPSAB1 (Hereditary Alpha Tryptasemia / HaT)
                    </p>
                    <p>Needs gene copy number test</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      KIT D816V (Mastocytosis Screening)
                    </p>
                    <p>
                      Needs specialized blood test (or bone marrow depending on
                      case)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Note */}
            <section className='bg-amber-50/80 rounded-2xl p-8 border-l-4 border-amber-400 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex items-start gap-3'>
                <span className='text-2xl'>ℹ️</span>
                <div>
                  <p className='font-semibold text-gray-900 mb-2'>
                    Important Considerations:
                  </p>
                  <ul className='space-y-2 text-gray-700 list-disc list-inside'>
                    <li>
                      Having risk alleles does not guarantee you will experience
                      symptoms—genetics is just one piece of the puzzle
                    </li>
                    <li>
                      Environmental factors, diet, stress, and other health
                      conditions all play significant roles
                    </li>
                    <li>
                      Always consult with a healthcare provider who understands
                      genetics and histamine/MCAS before making treatment
                      decisions based on genetic variants
                    </li>
                    <li>
                      DNA raw data from services like 23andMe or AncestryDNA can
                      be uploaded to third-party analysis tools to check these
                      SNPs
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DNAHistamineMCASPage;
