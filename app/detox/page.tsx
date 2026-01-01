import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { ChevronRight, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Detox / Removal - IR Sauna, Niacin Protocol, Chelation Therapy & Emerging Treatments',
  description:
    'Learn about detox and removal methods for gadolinium toxicity: IR sauna and niacin protocol by Dan Root, chelation therapy (a removal method) using Ca-DTPA and Zn-DTPA, and emerging clinical-stage approaches like HOPO-101 for toxic heavy metals. Find qualified clinics for chelation treatment.',
  keywords: [
    'gadolinium detox',
    'gadolinium chelation',
    'IR sauna detox',
    'niacin protocol',
    'Dan Root',
    'Ca-DTPA',
    'Zn-DTPA',
    'gadolinium removal',
    'gadolinium detoxification',
    'chelation therapy',
    'gadolinium detox methods',
    'infrared sauna gadolinium',
    'gadolinium chelation protocol',
    'DTPA chelation therapy',
    'gadolinium elimination',
    'HOPO-101',
    'HOPO Therapeutics',
    'heavy metal chelation drug',
  ],
  openGraph: {
    title:
      'Detox / Removal - IR Sauna, Niacin Protocol, Chelation Therapy & Emerging Treatments',
    description:
      'Learn about detox and removal methods for gadolinium toxicity: IR sauna and niacin protocol by Dan Root, chelation therapy (a removal method) using Ca-DTPA and Zn-DTPA, and emerging clinical-stage approaches like HOPO-101 for toxic heavy metals.',
    url: 'https://gadolinium.org/detox',
    type: 'article',
    images: [
      {
        url: '/detox.webp',
        width: 1200,
        height: 630,
        alt: 'Detox / Removal for Gadolinium Toxicity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Detox / Removal - IR Sauna, Niacin Protocol, Chelation Therapy & Emerging Treatments',
    description:
      'Learn about detox and removal methods for gadolinium toxicity: IR sauna and niacin protocol by Dan Root, chelation therapy (a removal method) using Ca-DTPA and Zn-DTPA, and emerging clinical-stage approaches like HOPO-101 for toxic heavy metals.',
    images: ['/detox.webp'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/detox',
  },
};

const DetoxPage = () => {
  return (
    <>
      <StructuredData
        pathname='/detox'
        pageTitle='Detox / Removal - IR Sauna, Niacin Protocol & Chelation Therapy'
        pageDescription='Learn about detox and removal methods for gadolinium toxicity: IR sauna and niacin protocol by Dan Root, and chelation therapy (a removal method) using Ca-DTPA and Zn-DTPA. Find qualified clinics for chelation treatment.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-white'>
          <div className='relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/detox.webp'
              alt='Detox and removal methods for gadolinium toxicity'
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
                    <span className='block'>Detox & Removal</span>
                    <span className='block text-white/95 mt-3 font-light text-4xl md:text-5xl lg:text-6xl'>
                      For Gadolinium Toxicity
                    </span>
                  </h1>
                  <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                    Main approaches to help your body eliminate retained
                    gadolinium
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
          {/* Introduction */}
          <section className='mb-20'>
            <div className='bg-blue-50/80 rounded-2xl p-8 md:p-12 border border-blue-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                Overview
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                There are established methods for addressing gadolinium in the
                body, including both detoxification approaches and removal
                methods. Chelation therapy is a medical removal method that uses
                chelating agents to bind and remove gadolinium, while the IR
                sauna/niacin protocol is a detoxification approach. An
                additional emerging clinical-stage pharmaceutical approach is
                being developed for toxic heavy metals. Each approach works
                differently and may be suitable for different individuals
                depending on their specific circumstances, health status, and
                access to medical care.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                It&apos;s important to consult with qualified healthcare
                professionals before beginning any detox protocol to ensure
                it&apos;s appropriate for your individual situation.
              </p>
            </div>
          </section>

          {/* IR Sauna / Niacin Protocol Section */}
          <section className='mb-20'>
            <div className='bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start'>
                {/* IR Image */}
                <div className='w-full md:w-1/3 flex-shrink-0'>
                  <div className='relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                    <Image
                      src='/ir.avif'
                      alt='Infrared sauna for detoxification'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                    IR Sauna / Niacin Protocol
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    The infrared sauna and niacin protocol, developed by{' '}
                    <strong>Dan Root</strong>, is a natural detoxification
                    method that combines the use of infrared sauna therapy with
                    niacin (vitamin B3) supplementation. This protocol is
                    designed to help mobilize and eliminate toxins, including
                    gadolinium, through enhanced sweating and improved
                    circulation.
                  </p>

                  <div className='bg-gray-50/80 rounded-2xl p-6 mb-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      How It Works
                    </h3>
                    <ul className='space-y-3 text-gray-700'>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Infrared Sauna:</strong> Uses infrared light
                          to penetrate deep into tissues, promoting sweating and
                          helping to mobilize stored toxins
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Niacin:</strong> Acts as a vasodilator,
                          increasing blood flow and helping to release toxins
                          from fat cells and tissues
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Combined Effect:</strong> The combination
                          helps the body naturally eliminate gadolinium through
                          sweat and improved metabolic processes
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Book Link */}
                  <div className='bg-white border-2 border-blue-200/80 rounded-2xl p-6 hover:border-blue-300/80 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-all duration-300'>
                    <div className='flex flex-col sm:flex-row gap-4 items-start'>
                      <div className='flex-shrink-0'>
                        <div className='relative w-32 h-44 rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                          <Image
                            src='/niacinbook.jpg'
                            alt="Dan Root's Niacin Protocol Book"
                            fill
                            className='object-cover'
                            sizes='128px'
                          />
                        </div>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                          Learn More from Dan Root
                        </h3>
                        <p className='text-gray-700 mb-4 leading-relaxed'>
                          For detailed information about the IR sauna and niacin
                          protocol, including specific dosing instructions,
                          safety guidelines, and personal experiences, refer to
                          Dan Root&apos;s comprehensive book on the subject.
                        </p>
                        <Link
                          href='https://amzn.to/4pE1JL7'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                          <span>View Dan Root&apos;s Book</span>
                          <ExternalLink
                            className='w-5 h-5'
                            aria-hidden='true'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Detox Group Link */}
                  <div className='bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-300 transition-colors mt-6'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Join the Detox Community
                    </h3>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      Connect with others who are using the IR sauna and niacin
                      protocol. Share experiences, ask questions, and get
                      support from the Detox.iNation Facebook group.
                    </p>
                    <Link
                      href='https://www.facebook.com/groups/Detox.iNation'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                      <span>Join Detox.iNation Group</span>
                      <ExternalLink className='w-5 h-5' aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chelation Therapy Section */}
          <section className='mb-20'>
            <div className='bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start'>
                {/* Chelation Image */}
                <div className='w-full md:w-1/3 flex-shrink-0'>
                  <div className='relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                    <Image
                      src='/chelate.webp'
                      alt='Chelation therapy for gadolinium detoxification'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                    Chelation Therapy (Removal Method)
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    Chelation therapy is a medical removal method that uses
                    specific chelating agents to bind and remove heavy metals,
                    including gadolinium, from the body. The protocol involves a
                    two-day cycle using different DTPA (diethylenetriamine
                    pentaacetate) compounds.
                  </p>

                  <div className='bg-gray-50/80 rounded-2xl p-6 mb-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      Treatment Protocol
                    </h3>
                    <div className='space-y-4'>
                      <div className='bg-white rounded-2xl p-5 border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'>
                        <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                          Day 1: Ca-DTPA (Calcium DTPA)
                        </h4>
                        <p className='text-gray-700 leading-relaxed mb-3'>
                          On the first day, <strong>Ca-DTPA</strong> (calcium
                          diethylenetriamine pentaacetate) is administered via
                          IV bolus injection. Ca-DTPA is a more effective
                          chelator for a range of metals and cations, and picks
                          up more gadolinium (and other metals, including zinc)
                          on the first day. The 5ml ampule is split into two
                          2.5ml injections, each given as a 1-minute bolus push,
                          spaced approximately 50-80 minutes apart.
                        </p>
                        <p className='text-gray-700 leading-relaxed text-sm italic'>
                          The patient initially sits upright for about 30-40
                          minutes to allow DTPA to pool in the lower arms and
                          legs where gadolinium tends to accumulate, then
                          reclines to facilitate removal of the rechelated
                          Gd-DTPA complex through the kidneys.
                        </p>
                      </div>
                      <div className='bg-white rounded-2xl p-5 border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'>
                        <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                          Day 2: Zn-DTPA (Zinc DTPA)
                        </h4>
                        <p className='text-gray-700 leading-relaxed'>
                          On the second day, <strong>Zn-DTPA</strong> (zinc
                          diethylenetriamine pentaacetate) is used. Zn-DTPA is
                          more selective for exogenous heavy metals and is more
                          specific for gadolinium. It continues the chelation
                          process, potentially picking up gadolinium that was
                          loosened but not removed by Ca-DTPA on day 1, while
                          simultaneously replenishing zinc that was removed on
                          the first day.
                        </p>
                      </div>
                    </div>
                    <div className='mt-4 pt-4 border-t border-gray-300'>
                      <p className='text-sm text-gray-600 leading-relaxed'>
                        <strong>Note:</strong> Patients typically require at
                        least 5 chelation sessions (5 paired administrations of
                        Ca- and Zn-DTPA), with 3-4 week spacing between sessions
                        preferred to allow metabolites to return to normal
                        homeostasis. A &quot;flare reaction&quot; is expected in
                        all patients and is considered the most definitive
                        clinical test verifying the patient has GDD.
                      </p>
                    </div>
                  </div>

                  <div className='bg-amber-50/80 rounded-2xl p-6 mb-6 border border-amber-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Important Considerations
                    </h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          Chelation therapy must be administered by qualified
                          medical professionals with experience in DTPA
                          chelation
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          A &quot;flare reaction&quot; occurs in all patients
                          and typically peaks on day 3, diminishing by day 7.
                          This is considered a positive indicator that chelation
                          is working
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          Immune response dampening is important concurrent with
                          chelation
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          24-hour urine testing is used to measure gadolinium
                          removal (should be at least 4 times pre-treatment
                          levels)
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          Supplements should be stopped at least 2 days before
                          and 3 days after chelation to avoid interference
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          Chelation therapy is expensive and typically not
                          covered by insurance. Costs include the DTPA
                          medication, clinic visits, IV administration, and
                          monitoring. Since multiple sessions (at least 5) are
                          typically required, the total cost can be significant
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Dr. Semelka Blog Link */}
                  <div className='bg-blue-50/80 rounded-2xl p-6 mb-6 border border-blue-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Learn More from Dr. Richard Semelka
                    </h3>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      Dr. Richard Semelka, MD, is a leading expert in gadolinium
                      toxicity and has published extensively on DTPA chelation
                      therapy for Gadolinium Deposition Disease (GDD). His
                      detailed blog post explains the protocol, rationale, and
                      important considerations for chelation therapy.
                    </p>
                    <Link
                      href='https://www.richardsemelka.com/single-post/chelation-with-dtpa'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                      <span>Read Dr. Semelka&apos;s DTPA Chelation Blog</span>
                      <ExternalLink className='w-5 h-5' aria-hidden='true' />
                    </Link>
                  </div>

                  {/* Clinics Link */}
                  <div className='bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-300 transition-colors'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Find a Qualified Clinic
                    </h3>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      Chelation therapy requires specialized medical
                      supervision. Visit our clinics page to find qualified
                      healthcare providers who offer chelation therapy for
                      gadolinium toxicity.
                    </p>
                    <Link
                      href='/clinics'
                      className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                      <span>View Clinics</span>
                      <ChevronRight className='w-5 h-5' aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Time and Natural Detox Pathways Section */}
          <section className='mb-20'>
            <div className='bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start'>
                {/* Time Image */}
                <div className='w-full md:w-1/3 flex-shrink-0'>
                  <div className='relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                    <Image
                      src='/time.jpg'
                      alt='Time and natural detox pathways'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                    Time and Natural Detox Pathways
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    It&apos;s important to understand that detoxification from
                    gadolinium toxicity is a process that takes time. The body
                    has natural detoxification pathways that can be supported
                    through various supplements and natural substances. While
                    these approaches may work more gradually than medical
                    interventions like chelation therapy, they can be valuable
                    components of a comprehensive detoxification strategy.
                  </p>

                  <div className='bg-gray-50/80 rounded-2xl p-6 mb-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      Supporting Natural Detoxification
                    </h3>
                    <p className='text-gray-700 leading-relaxed mb-4'>
                      Several natural substances have been identified as
                      potentially helpful in supporting the body&apos;s natural
                      detoxification processes for gadolinium toxicity:
                    </p>
                    <ul className='space-y-3 text-gray-700 mb-4'>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Glutathione:</strong> A powerful antioxidant
                          that plays a crucial role in the body&apos;s natural
                          detoxification processes
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>ALA (Alpha Lipoic Acid):</strong> An
                          antioxidant that may help support detoxification
                          pathways and reduce oxidative stress
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>NAC (N-acetyl cysteine):</strong> A precursor
                          to glutathione that may help boost the body&apos;s
                          natural antioxidant capacity
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Activated Charcoal/Zeolite:</strong> Natural
                          binders that may help absorb and remove toxins from
                          the digestive tract
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>Bentonite Clay:</strong> A natural clay that
                          may help bind and remove toxins from the body
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-blue-600 mr-3 mt-1'>•</span>
                        <span>
                          <strong>MCP (Modified Citrus Pectin):</strong> A form
                          of pectin that may help bind heavy metals and support
                          their elimination
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-700 leading-relaxed text-sm italic'>
                      Note: These natural detox pathways work gradually and may
                      take time to show results. They are often used as
                      supportive measures alongside other detoxification
                      approaches.
                    </p>
                  </div>

                  <div className='bg-blue-50 rounded-lg p-6 border border-blue-200'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Learn More About Natural Detoxification
                    </h3>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      For comprehensive information about these natural detox
                      pathways, including detailed guidance on supplements,
                      diet, lifestyle modifications, and other supportive
                      approaches, visit our &quot;What Helps&quot; page. This
                      resource provides extensive information about natural
                      remedies and approaches for managing gadolinium toxicity.
                    </p>
                    <Link
                      href='/what-helps'
                      className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                      <span>View What Helps Page</span>
                      <ChevronRight className='w-5 h-5' aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className='mb-20'>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center tracking-tight'>
              Choosing the Right Approach
            </h2>
            <p className='text-center text-gray-700 mb-8 max-w-3xl mx-auto'>
              The comparison below focuses on three main approaches that are
              currently available to patients: the IR sauna/niacin protocol (a
              detoxification approach), medically supervised chelation therapy
              (a removal method), and time with natural detox pathways. Emerging
              clinical-stage options like HOPO-101 remain investigational and
              are not standard treatments at this time.
            </p>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-white border border-gray-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  IR Sauna / Niacin Protocol
                </h3>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Can be done at home with proper equipment</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Natural, non-invasive approach</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Generally well-tolerated</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>Requires access to infrared sauna</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>May take longer to see results</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>More cost-effective than chelation therapy</span>
                  </li>
                </ul>
              </div>
              <div className='bg-white border border-gray-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Chelation Therapy (Removal Method)
                </h3>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Medically supervised treatment</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Direct binding and removal of gadolinium</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>Can be more targeted and potentially faster</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>Requires clinic visits and medical supervision</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>May have side effects and requires monitoring</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>
                      Expensive - typically not covered by insurance, requires
                      multiple sessions (at least 5)
                    </span>
                  </li>
                </ul>
              </div>
              <div className='bg-white border border-gray-200/80 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Time &amp; Natural Detox Pathways
                </h3>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>
                      Supports the body&apos;s own detoxification systems over
                      time
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>
                      Can include supplements like glutathione, ALA, NAC, and
                      binders (e.g., charcoal, zeolite, bentonite clay, MCP)
                      under medical guidance
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-600 mr-3 mt-1'>✓</span>
                    <span>
                      Often more accessible and can be combined with lifestyle
                      changes (sleep, hydration, nutrition)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>
                      Works gradually and may take longer to see changes
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>
                      Supplement combinations can be complex and should be
                      reviewed with a knowledgeable clinician
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>⚠</span>
                    <span>
                      Evidence is more limited and individualized compared with
                      formal medical protocols
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emerging Clinical-Stage Treatment Section */}
          <section className='mb-20'>
            <div className='bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-start'>
                {/* HOPO-101 Image */}
                <div className='w-full md:w-1/3 flex-shrink-0'>
                  <div className='relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                    <Image
                      src='/hopo.png'
                      alt='HOPO Therapeutics HOPO-101 clinical-stage chelation drug candidate'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                    Emerging Clinical-Stage Treatment (HOPO-101)
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                    HOPO Therapeutics is a clinical-stage pharmaceutical company
                    developing novel therapeutics designed to prevent and treat
                    the toxic effects of heavy metal exposure on human health.
                    Their investigational, orally administered chelating agents
                    are being developed with the goal of simplifying treatment
                    for patients exposed to radioactive materials like uranium
                    and plutonium, as well as environmental toxins such as lead,
                    mercury, and other toxic heavy metals.
                  </p>

                  <div className='bg-gray-50/80 rounded-2xl p-6 mb-6 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      About HOPO-101
                    </h3>
                    <p className='text-gray-700 leading-relaxed mb-4'>
                      HOPO-101 is a clinical-stage drug candidate being studied
                      for its ability to selectively bind and promote the rapid
                      clearance of a range of heavy metals from the body. It is
                      uniquely designed to effectively remove harmful metals
                      while largely sparing the essential metal ions that are
                      crucial for maintaining normal, healthy function of the
                      body.
                    </p>
                    <p className='text-sm text-gray-700 leading-relaxed italic'>
                      HOPO-101 and related products described by HOPO
                      Therapeutics are strictly investigational and have not
                      been definitively shown to be safe or effective in
                      clinical trials. None of these statements have been
                      evaluated by the FDA, and HOPO-101 is not FDA-approved for
                      any use or indication. Existing statements are based on
                      animal studies, and additional research is necessary
                      before any definitive conclusions can be made. (See
                      details at HOPO Therapeutics:
                      https://www.hopotx.com/programs#toxic-heavy-metals)
                    </p>
                  </div>

                  <div className='bg-amber-50/80 rounded-2xl p-6 mb-6 border border-amber-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      What This Means for Patients Today
                    </h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          HOPO-101 is not an approved or standard-of-care
                          treatment for gadolinium toxicity at this time.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          It represents an emerging, investigational approach in
                          the broader field of heavy metal chelation that may
                          shape future treatment options if proven safe and
                          effective.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-amber-600 mr-3 mt-1'>•</span>
                        <span>
                          Patients should not seek HOPO-101 outside of properly
                          conducted clinical trials and should always consult
                          qualified healthcare professionals when considering
                          participation in any research study.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className='bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-300 transition-colors'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      Learn More About HOPO-101
                    </h3>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      For detailed and up-to-date information about HOPO-101,
                      including its development status and scientific
                      publications, visit the official HOPO Therapeutics
                      programs page.
                    </p>
                    <Link
                      href='https://www.hopotx.com/programs#toxic-heavy-metals'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                      <span>Visit HOPO Therapeutics</span>
                      <ExternalLink className='w-5 h-5' aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className='mb-20'>
            <div className='bg-red-50/80 rounded-2xl p-8 md:p-12 border border-red-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4'>
                Important Medical Disclaimer
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                The information provided on this page is for educational
                purposes only and should not be considered medical advice.
                Detoxification and removal methods should only be undertaken
                under the guidance of qualified healthcare professionals who are
                familiar with gadolinium toxicity and detoxification/removal
                protocols.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Individual responses to detoxification methods can vary
                significantly. It&apos;s essential to have proper medical
                supervision, especially for chelation therapy, and to monitor
                your health throughout any detox protocol. Always consult with
                your healthcare provider before beginning any new treatment
                approach.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DetoxPage;
