import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    'AOC1',
    'HNMT gene',
    'HDC gene',
    'HRH receptors',
    'MTHFR',
    'BHMT',
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
        url: '/dna.jpg',
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
    images: ['/dna.jpg'],
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

          {/* Check Your DNA File CTA */}
          <section className='mb-16 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-3xl border border-blue-200/60 p-8 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'>
            <div className='text-center max-w-3xl mx-auto'>
              <div className='flex items-center justify-center gap-3 mb-6'>
                <span className='text-4xl'>📊</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  Check Your DNA Raw Data File
                </h2>
              </div>
              <p className='text-lg text-gray-700 mb-8'>
                Upload your DNA raw data file to automatically scan for
                histamine and MCAS-related genetic variants. Our free tool
                checks for 18 key SNPs across 5 categories and shows you which
                variants you carry. All processing happens locally in your
                browser—your DNA data never leaves your device.
              </p>
              <Link
                href='/dna-checker'
                className='inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 shadow-[0_4px_12px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4'>
                <span>Check Your DNA File Now</span>
                <ChevronRight
                  className='w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1'
                  aria-hidden='true'
                />
              </Link>
              <p className='text-sm text-gray-600 mt-4'>
                Includes step-by-step instructions for downloading files from
                23andMe and AncestryDNA
              </p>
            </div>
          </section>

          {/* Main Content Sections */}
          <div className='space-y-12'>
            {/* 1. Gut Histamine (AOC1/DAO) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟢</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  1) Gut Histamine (AOC1/DAO) — Breaks Down Histamine from Food
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
                      rs10156191
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced enzyme activity</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1049793
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>Reduced enzyme activity</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs2052129
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Low DAO levels in blood</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1049742
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced enzyme activity</p>
                  </div>
                  <div className='bg-green-100/60 rounded-xl p-4 border border-green-300/60'>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs2071514
                    </p>
                    <p className='mb-1'>
                      <strong>Protective allele:</strong> A
                    </p>
                    <p>Associated with slightly higher DAO</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Systemic Histamine (HNMT) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🔵</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  2) Systemic Histamine (HNMT) — Clears Histamine from Brain
                  &amp; Organs
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  <strong>HNMT (Histamine N-Methyltransferase)</strong> clears
                  histamine in tissues and the brain. These variants are often
                  discussed in relation to sleep and anxiety symptoms.
                </p>
                <div className='bg-blue-50/80 rounded-2xl p-6 border border-blue-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs11558538
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced clearance</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs1050891
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A
                    </p>
                    <p>Reduced clearance</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      rs2071048
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced clearance (Common)</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>i3000469</p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced clearance</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Production & Receptors (HDC/HRH) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟠</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  3) Production &amp; Receptors (HDC/HRH) — How Much You Make
                  &amp; How Sensitive You Are
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  These variants affect histamine production and receptor
                  sensitivity, which can influence how your body responds to
                  histamine and how much you produce.
                </p>
                <div className='bg-orange-50/80 rounded-2xl p-6 border border-orange-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      HDC rs2073440
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>Decreased production (alters balance)</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      HRH1 rs901865
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Increased H1 receptors / Asthma risk</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      HRH2 rs2067474
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A
                    </p>
                    <p>Decreased H2 receptor function</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      HRH4 rs11662595
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>Immune regulation issues</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Methylation (MTHFR & BHMT) */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟣</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  4) Methylation (MTHFR &amp; BHMT) — Fuel Needed to Run the
                  Detox Enzymes
                </h2>
              </div>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg mb-4'>
                  <strong>MTHFR (Methylenetetrahydrofolate Reductase)</strong>{' '}
                  and{' '}
                  <strong>
                    BHMT (Betaine-Homocysteine S-Methyltransferase)
                  </strong>{' '}
                  play crucial roles in methylation, which supports
                  detoxification pathways and neurotransmitter production.
                </p>
                <div className='bg-purple-50/80 rounded-2xl p-6 border border-purple-200/60 space-y-4'>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      MTHFR C677T (rs1801133)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A (on 23andMe) / T
                      (Standard)
                    </p>
                    <p>Reduced folate conversion</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      MTHFR A1298C (rs1801131)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G (on 23andMe) / C
                      (Standard)
                    </p>
                    <p>
                      May affect BH4-related pathways (mood/detox discussions)
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      BHMT-08 (rs651852)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Slow homocysteine recycling / Stress sensitive</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      BHMT-02 (rs567754)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> T
                    </p>
                    <p>Reduced enzyme activity</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      BHMT-01 (rs3733890)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A
                    </p>
                    <p>Linked to choline depletion</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Stress + Inflammation */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>🟡</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  5) Stress &amp; Inflammation — Triggers That Worsen Reactions
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
                      COMT (rs4680)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> A
                    </p>
                    <p>Slow breakdown of stress hormones</p>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-2'>
                      IL-6 (rs1800795)
                    </p>
                    <p className='mb-1'>
                      <strong>Risk allele:</strong> G
                    </p>
                    <p>Prone to high inflammation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Special Testing Required */}
            <section className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-red-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-red-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center gap-3 mb-6'>
                <span className='text-3xl'>⚠️</span>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
                  6) Not in Typical Raw SNP Lists (Needs Special Testing)
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
