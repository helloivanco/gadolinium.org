import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Signs & Symptoms after Gadolinium Administration',
  description:
    'Comprehensive patient survey report on symptoms after gadolinium-based contrast agent (GBCA) administration. Learn about symptoms paralleling early-phase NSF, nervous system effects, and gadolinium retention in patients with normal renal function.',
  keywords: [
    'gadolinium symptoms',
    'gadolinium toxicity symptoms',
    'NSF symptoms',
    'gadolinium retention symptoms',
    'MRI contrast symptoms',
    'gadolinium side effects',
    'gadolinium patient survey',
    'gadolinium nervous system',
    'gadolinium calcium channels',
    'gadolinium adverse effects',
    'GBCA symptoms',
    'gadolinium deposition symptoms',
    'gadolinium toxicity signs',
    'gadolinium health effects',
  ],
  openGraph: {
    title: 'Signs & Symptoms after Gadolinium Administration',
    description:
      'Comprehensive patient survey report on symptoms after gadolinium-based contrast agent (GBCA) administration.',
    url: 'https://gadolinium.org/symptoms',
    type: 'article',
    images: [
      {
        url: '/pain.jpg',
        width: 1200,
        height: 630,
        alt: 'Signs & Symptoms after Gadolinium Administration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signs & Symptoms after Gadolinium Administration',
    description:
      'Comprehensive patient survey report on symptoms after gadolinium-based contrast agent (GBCA) administration.',
    images: ['/pain.jpg'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/symptoms',
  },
};

const SymptomsPage = () => {
  const topSymptoms = [
    {
      category: 'Nervous System',
      symptoms: [
        { name: 'Tingling / Prickling sensations', frequency: '79%' },
        { name: 'Brain Fog / Cognitive Issues', frequency: '72%' },
        { name: 'Burning pain', frequency: '69%' },
        { name: 'Muscle Twitching / Fasciculations', frequency: '69%' },
        { name: 'Muscle Spasms/ Cramps', frequency: '57%' },
        { name: 'Ache (dull continuous pain)', frequency: '57%' },
        {
          name: 'Low-level internal buzzing / electric-like sensations',
          frequency: '53%',
        },
        { name: 'Numbness', frequency: '48%' },
        { name: 'Lightheadedness/ Dizziness', frequency: '48%' },
        {
          name: 'Head Pain (stabbing/ sharp/ localized head pain)',
          frequency: '48%',
        },
        { name: 'Headache (atypical/new onset)', frequency: '44%' },
        { name: 'Balance Issues', frequency: '46%' },
        { name: 'Difficulty Walking', frequency: '42%' },
        { name: 'Tinnitus (ringing in ears)', frequency: '46%' },
        { name: 'Vision Changes / Blurry Vision', frequency: '49%' },
        { name: 'Dry Eyes', frequency: '39%' },
      ],
    },
    {
      category: 'Skeletal System',
      symptoms: [
        { name: 'Pain in Joints', frequency: '61%' },
        { name: 'Deep Bone Pain', frequency: '57%' },
        { name: 'Pain in Ribs', frequency: '36%' },
        {
          name: 'Joint instability (clicking, popping, unstable joints)',
          frequency: '32%',
        },
      ],
    },
    {
      category: 'Integumentary System (Skin)',
      symptoms: [
        {
          name: 'Skin Changes (hyperpigmented, mottled, or blotchy)',
          frequency: '40%',
        },
        { name: 'Wrinkled skin (accelerated aging of skin)', frequency: '39%' },
        { name: 'Itchy Skin', frequency: '38%' },
        { name: 'Skin Rash', frequency: '32%' },
        {
          name: 'Skin Lesions (ulcers, papules, macules, or nodules)',
          frequency: '24%',
        },
        { name: 'Tight Skin', frequency: '25%' },
      ],
    },
    {
      category: 'Endocrine System',
      symptoms: [
        { name: 'Fatigue', frequency: '65%' },
        { name: 'Insomnia', frequency: '52%' },
        { name: 'Hair Loss', frequency: '35%' },
        { name: 'Low Body Temperature', frequency: '28%' },
        { name: 'Loss of Appetite/ Anorexia', frequency: '26%' },
        { name: 'Unexplained Weight Loss', frequency: '25%' },
      ],
    },
    {
      category: 'Cardiovascular & Circulatory System',
      symptoms: [
        { name: 'Tachycardia (fast heart rate)', frequency: '38%' },
        { name: 'Arrhythmias (irregular heartbeat)', frequency: '29%' },
        { name: 'Chest Pain', frequency: '30%' },
        { name: 'Other Palpitations', frequency: '25%' },
        {
          name: 'Hypertension (high blood pressure) (new onset)',
          frequency: '18%',
        },
        { name: 'Edema (swelling of extremities)', frequency: '18%' },
      ],
    },
    {
      category: 'Digestive System',
      symptoms: [
        {
          name: 'Digestive Symptoms (nausea, vomiting, diarrhea, etc.)',
          frequency: '49%',
        },
        { name: 'Abdominal Pain', frequency: '33%' },
        { name: 'Food intolerances (new)', frequency: '22%' },
        { name: 'Pain in Liver/Gallbladder Area', frequency: '22%' },
      ],
    },
    {
      category: 'Respiratory System',
      symptoms: [
        { name: 'Shortness of Breath', frequency: '35%' },
        { name: 'Flu-like Symptoms', frequency: '23%' },
      ],
    },
    {
      category: 'Urinary System',
      symptoms: [{ name: 'Pain in Kidneys or Bladder', frequency: '30%' }],
    },
  ];

  const keyFindings = [
    {
      title: 'Survey Participants',
      content:
        '316 patients with normal or near-normal renal function who experienced symptoms after MRI with a GBCA, plus 8 patients with biopsy-confirmed NSF.',
    },
    {
      title: 'Gadolinium Retention Confirmed',
      content:
        '185 patients had laboratory tests confirming gadolinium retention 30 days or longer after their last MRI, with some cases showing retention for up to 22 years.',
    },
    {
      title: 'Symptom Overlap with NSF',
      content:
        '19 of the 28 most frequently reported symptoms in the NSF Group were also ranked among the top symptoms reported by patients with normal renal function, indicating substantial overlap in clinical presentation.',
    },
    {
      title: 'Nervous System Impact',
      content:
        "11 of the 19 most frequently reported symptoms across all patient groups involve the nervous system, consistent with gadolinium's toxic effects on calcium channels.",
    },
    {
      title: 'Unconfounded Cases',
      content:
        '75 patients received only one type of GBCA (19 linear & 56 macrocyclic) with confirmed gadolinium retention. The same 14 nervous system symptoms ranked in the top 25 for both linear and macrocyclic agents.',
    },
    {
      title: 'Chronic Effects',
      content:
        '43% of patients reported changes in employment status due to health issues, and 41% said altered brain function affects their ability to work as they did prior to MRIs.',
    },
  ];

  const earlyPhaseNSFSymptoms = [
    'Skin changes - Rash, erythema, skin discoloration, itching, burning sensations, swelling',
    'Neuropathic symptoms - 80% of patients complained of pain, dysesthesia (burning, itching, electric-shock sensations), or hyperalgesia (increased sensitivity to pain)',
    'Muscle weakness complaints are common',
    'Deep bone pain in the hips and ribs',
    'Diffuse hair loss in up to 50% of patients',
    'Acute gastroenteritis discomfort with pain, vomiting, and diarrhea',
    'Red eyes as signs of noninfectious conjunctivitis in 20% or more',
    'Acute pneumonia symptoms in 15%, including shortness of breath, hypoxia',
    'Signs of systemic inflammation with fever, elevated C-reactive protein, elevated ferritin, anemia',
  ];

  return (
    <>
      <StructuredData
        pathname='/symptoms'
        pageTitle='Signs & Symptoms after Gadolinium Administration'
        pageDescription='Comprehensive patient survey report on symptoms after gadolinium-based contrast agent (GBCA) administration. Learn about symptoms paralleling early-phase NSF, nervous system effects, and gadolinium retention in patients with normal renal function.'
      />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <header className='relative bg-white'>
          <div className='relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden'>
            {/* Background Image */}
            <Image
              src='/pain.jpg'
              alt='Medical illustration representing pain and symptoms'
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
                    <span className='block'>Signs & Symptoms after</span>
                    <span className='block text-white/95 mt-3 font-light text-4xl md:text-5xl lg:text-6xl'>
                      Gadolinium Exposure
                    </span>
                  </h1>
                  <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                    A comprehensive patient survey report on symptoms
                    paralleling early-phase NSF
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
          {/* Abstract Section */}
          <section className='mb-20'>
            <div className='bg-blue-50/80 rounded-2xl p-8 md:p-12 border border-blue-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                Abstract
              </h2>
              <div className='prose prose-lg max-w-none text-gray-700 space-y-4'>
                <p>
                  The U.S. Food & Drug Administration (FDA) has acknowledged
                  that after MRIs with a gadolinium-based contrast agent (GBCA),
                  patients retain an unknown amount of gadolinium (Gd) in the
                  brain, bone, skin, and other tissues, where it can remain for
                  months to years. Although Gd is a toxic metal recognized as
                  the primary cause of nephrogenic systemic fibrosis (NSF), harm
                  attributed to long-term Gd retention in patients with normal
                  renal function has not been recognized.
                </p>
                <p>
                  <strong>Results:</strong> From a list of 60 symptoms, 19 of
                  the 28 most frequently reported symptoms of the NSF Group were
                  also ranked among the top symptoms reported by two groups of
                  Gd-exposed patients without renal impairment, indicating a
                  substantial overlap in clinical presentation between what has
                  been published about early-phase NSF and the post-GBCA symptom
                  complex. Eleven of the 19 most frequently reported symptoms
                  involve the nervous system.
                </p>
                <p>
                  <strong>Conclusion:</strong> These observations are consistent
                  with the hypothesis that gadolinium exposure is associated
                  with a spectrum of manifestations and underscore the need for
                  standardized recognition, systematic clinical assessment, and
                  further objective study of Gd-associated multisystem symptoms
                  in all patient populations.
                </p>
              </div>
            </div>
          </section>

          {/* Key Findings */}
          <section className='mb-20'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-12 text-center tracking-tight'>
              Key Findings
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {keyFindings.map((finding, index) => (
                <div
                  key={index}
                  className='bg-white border border-gray-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    {finding.title}
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    {finding.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Symptoms by System */}
          <section className='mb-20'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-4 text-center tracking-tight'>
              Symptoms by Body System
            </h2>
            <p className='text-xl text-gray-600 text-center mb-12 font-light max-w-3xl mx-auto'>
              Symptoms reported within the first 3 months after last MRI with
              GBCA (WITH Group - 185 patients with confirmed gadolinium
              retention)
            </p>

            <div className='space-y-12'>
              {topSymptoms.map((system, index) => (
                <div
                  key={index}
                  className='bg-gray-50/80 rounded-2xl p-8 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
                  <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6'>
                    {system.category}
                  </h3>
                  <div className='grid md:grid-cols-2 gap-4'>
                    {system.symptoms.map((symptom, symptomIndex) => (
                      <div
                        key={symptomIndex}
                        className='bg-white rounded-xl p-4 border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex justify-between items-center hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow duration-200'>
                        <span className='text-gray-800 font-medium'>
                          {symptom.name}
                        </span>
                        <span className='text-blue-600 font-semibold ml-4 whitespace-nowrap'>
                          {symptom.frequency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Early-Phase NSF Symptoms */}
          <section className='mb-20'>
            <div className='bg-amber-50/80 rounded-2xl p-8 md:p-12 border border-amber-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                Early-Phase NSF Symptoms
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                According to Marckmann & Skov (2009), &quot;skin changes and
                neuropathic symptoms predominate the early phase of NSF.&quot;
                The early phase ranged from 14 to 60 days after GBCA exposure,
                with an intermediate phase of 60 to 180 days.
              </p>
              <ul className='space-y-3 text-gray-700'>
                {earlyPhaseNSFSymptoms.map((symptom, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='text-amber-600 mr-3 mt-1'>•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Survey Methodology */}
          <section className='mb-20'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-900 mb-8 text-center tracking-tight'>
              Survey Methodology
            </h2>
            <div className='bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'>
              <div className='prose prose-lg max-w-none text-gray-700 space-y-6'>
                <div>
                  <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                    Participants
                  </h3>
                  <ul className='space-y-2 list-disc list-inside'>
                    <li>
                      316 patients with normal or near-normal renal function who
                      experienced symptoms after an MRI with a GBCA
                    </li>
                    <li>
                      185 patients had a laboratory test confirming gadolinium
                      retention 30 days or longer after their last MRI (WITH
                      Group)
                    </li>
                    <li>
                      131 patients did not have gadolinium testing performed
                      (WITHOUT Group)
                    </li>
                    <li>
                      8 patients with biopsy-confirmed nephrogenic systemic
                      fibrosis (NSF Group)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                    Survey Design
                  </h3>
                  <p>
                    The online Patient Survey was created using SurveyMonkey and
                    included 60 symptoms compiled from patient reports,
                    published literature on Gadolinium Deposition Disease (GDD),
                    and Symptoms Associated with Gadolinium Exposure (SAGE).
                    Participants completed the survey without knowledge of other
                    participants&apos; responses.
                  </p>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
                    Geographic Distribution
                  </h3>
                  <p>
                    Patients from around the world participated: 220 from the
                    United States, 12 from Australia, 30 from Germany, 19 from
                    the UK, 12 from Canada, and others from 20+ additional
                    countries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Conclusions */}
          <section className='mb-20'>
            <div className='bg-red-50/80 rounded-2xl p-8 md:p-12 border border-red-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
                Important Conclusions
              </h2>
              <div className='prose prose-lg max-w-none text-gray-700 space-y-4'>
                <p>
                  The symptoms reported by those with normal renal function
                  closely match the early phase symptoms of NSF as well as the
                  responses of the NSF Group in this survey. This pattern
                  consistency supports the hypothesis of a gadolinium-related
                  symptom spectrum that extends to those with normal renal
                  function.
                </p>
                <p>
                  Evidence of harm can be found in how body systems dysfunction
                  due to gadolinium&apos;s interference with various processes,
                  particularly those that require calcium for proper function.
                  The number of survey responses linked to the nervous system is
                  consistent with gadolinium&apos;s documented toxic effects on
                  calcium channels, as acknowledged by the FDA in a 2007
                  Memorandum.
                </p>
                <p>
                  The Patient Survey results warrant a comprehensive
                  investigation into the long-term adverse health effects of
                  gadolinium retained in connective tissues and glandular
                  tissues in all patient populations.
                </p>
                <p className='font-semibold text-gray-900'>
                  The symptoms data from this Patient Survey combined with the
                  FDA&apos;s 2007 Memorandum that stated, &quot;unchelated
                  gadolinium is a very toxic compound, particularly to the liver
                  and to calcium channels,&quot; warrant acknowledgement that
                  retained gadolinium can cause harm to patients with normal
                  renal function, just as it did to some renally impaired
                  patients diagnosed with NSF.
                </p>
              </div>
            </div>
          </section>

          {/* Citation */}
          <section className='mb-20'>
            <div className='bg-gray-50/80 rounded-2xl p-8 border border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Citation
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Williams, S., Grimm, H., Ratnam, S., Walsh, C. (2025). Signs &
                Symptoms after Gadolinium Administration: A Patient Survey.
                Report 1: Symptoms Paralleling Early-Phase NSF. Published
                Online:{' '}
                <a
                  href='https://gadoliniumtoxicity.com/research/ourresearch/contrast-mri-2025-patient-survey-report-1/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 underline'>
                  GadoliniumToxicity.com
                </a>
              </p>
            </div>
          </section>

          {/* Book Recommendation Snippet */}
          <section className='mb-20'>
            <div className='bg-white border-2 border-blue-200/80 rounded-2xl p-6 hover:border-blue-300/80 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-all duration-300'>
              <div className='flex flex-col sm:flex-row gap-4 items-start'>
                <div className='flex-shrink-0'>
                  <div className='relative w-32 h-44 rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                    <Image
                      src='/gadtoxicity-book.jpg'
                      alt="Debbie Heist Lambert's book: Gadolinium Deposition and Toxicity"
                      fill
                      className='object-cover'
                      sizes='128px'
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Learn More About Patient Experiences
                  </h3>
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    <strong>
                      Gadolinium Deposition and Toxicity: Humanizing a
                      Life-Changing Event
                    </strong>{' '}
                    by Debbie Heist Lambert offers a patient perspective on
                    gadolinium deposition and toxicity, humanizing this
                    life-changing event through personal experiences shared by
                    patients from around the world. The heartfelt stories in
                    these pages represent real examples of adverse reactions and
                    events following one or more injections of GBCA (gadolinium-based
                    contrast agent), providing insight into the signs,
                    side-effects, symptoms, and associations that patients
                    report.
                  </p>
                  <Link
                    href='https://amzn.to/4aL7oKz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
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
                  </Link>
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

export default SymptomsPage;
