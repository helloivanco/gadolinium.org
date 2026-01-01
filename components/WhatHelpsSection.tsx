const WhatHelpsSection = () => {
  return (
    <section className='mb-32' aria-labelledby='what-helps-heading'>
      <div className='text-center mb-20'>
        <h2
          id='what-helps-heading'
          className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight'>
          What Helps
        </h2>
        <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
          A holistic approach focusing on diet, lifestyle, and supporting the
          body&apos;s natural processes is key to managing Gadolinium Deposition
          Disease (GDD) and toxicity.
        </p>
      </div>

      <div className='space-y-16'>
        {/* Diet and Hydration */}
        <article className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='text-3xl'>🥗</span>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
              Diet and Hydration
            </h3>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b-2 border-gray-200'>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Category
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Recommended Items
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Avoid/Limit
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Expert Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Foundation
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Healthy diet, plenty of{' '}
                    <strong>fruits and vegetables</strong>, alkaline water,
                    purified water, electrolyte/mineral-containing beverages.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Refined/processed sugars, food additives.
                  </td>
                  <td className='py-4 px-4 text-gray-600'>All Doctors</td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Juicing
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Cold-press juicing</strong>, especially{' '}
                    <strong>celery juice</strong>.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>
                    Dr. Semelka, Dr. Walsh
                  </td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Detox Foods
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Chlorella</strong>, cilantro, onions, garlic,
                    oregano, rosemary, thyme, sage, parsley, alfalfa, dark green
                    vegetables, <strong>fruit pectin</strong> (apples, berries,
                    citrus, etc.).
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>Dr. Semelka</td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Antioxidants
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Dark chocolate, pecans, cinnamon, blueberries, strawberries,
                    artichokes, olives, avocados, red cabbage, beans, beets,
                    spinach.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>Dr. Semelka</td>
                </tr>
                <tr className='border-b border-gray-100 bg-orange-50'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Critical Avoidance
                  </td>
                  <td className='py-4 px-4 text-gray-700'>—</td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>High-oxalate foods</strong> (spinach, rhubarb, most
                    nuts, berries, chocolate) to prevent gadolinium nanoparticle
                    formation.
                  </td>
                  <td className='py-4 px-4 text-gray-600'>
                    <strong>Dr. Wagner (Primary)</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Lifestyle and Physical Wellness */}
        <article className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='text-3xl'>🏃‍♀️</span>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
              Lifestyle and Physical Wellness
            </h3>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b-2 border-gray-200'>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Category
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Recommended Items
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Avoid/Limit
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Expert Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Activity
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Staying active</strong> (walking/exercise),
                    stretching, Yoga or Tai Chi.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Excessive exercise</strong> (can cause metabolic
                    acidosis).
                  </td>
                  <td className='py-4 px-4 text-gray-600'>Dr. Semelka</td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Therapies
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Epsom salt baths</strong>, hot baths or showers,
                    conventional or <strong>infrared sauna</strong>,{' '}
                    <strong>Hyperbaric Oxygen Therapy</strong> (HBOT).
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>Dr. Semelka</td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Bodywork
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Massage therapy, acupuncture,{' '}
                    <strong>lymphatic massage</strong>, physical therapy
                    (modified as necessary).
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>
                    Dr. Semelka, Dr. Walsh
                  </td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>
                    Mind/Rest
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Plenty of <strong>sleep</strong>, mind
                    relaxation/meditation, stress management.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>N/A</td>
                  <td className='py-4 px-4 text-gray-600'>
                    Dr. Semelka, Dr. Walsh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Supplements and Medications */}
        <article className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='text-3xl'>💊</span>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
              Supplements and Medications
            </h3>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b-2 border-gray-200'>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Category
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Key Supplements
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Anti-Inflammation/Detox
                  </th>
                  <th className='text-left py-4 px-4 font-semibold text-gray-900'>
                    Pain/Symptom Relief
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>Core</td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>Chlorella</strong>, <strong>LDN</strong> (low-dose
                    naltrexone) Rx, <strong>GABA</strong>, Turmeric/curcumin,
                    Vitamin C (as needed), Daily MVI with minerals, Magnesium,
                    Zinc.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    <strong>ALA</strong> (Alpha Lipoic Acid),{' '}
                    <strong>Glutathione</strong>, <strong>NAC</strong>
                    (N-acetyl cysteine),{' '}
                    <strong>Activated Charcoal/zeolite</strong>, Bentonite Clay,{' '}
                    <strong>MCP</strong> (modified citrus pectin).
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Antihistamines, Ibuprofen, Enteric-coated aspirin,{' '}
                    <strong>CBD Oil</strong> (oral/topical), THC (oral doses),
                    Fibromyalgia drugs (e.g., Gabapentin, Lyrica).
                  </td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-4 px-4 font-medium text-gray-800'>Other</td>
                  <td className='py-4 px-4 text-gray-700'>
                    CoQ10/ubiquinol, Fish Oil (Omega 3s), Milk Thistle,
                    Selenium, ATP Fuel, B Vitamins (Niacin, B6, B12, Thiamine,
                    Folate), Vitamin D3, E.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Medicinal mushrooms and herbs.
                  </td>
                  <td className='py-4 px-4 text-gray-700'>
                    Ginger oil, Rosemary oil, Peppermint oil (topicals), Apple
                    cider vinegar, Arnica topical.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg'>
            <div className='flex items-start gap-3'>
              <span className='text-2xl'>⚠️</span>
              <div>
                <p className='font-semibold text-gray-900 mb-2'>
                  Important Supplement Note:
                </p>
                <p className='text-gray-700 mb-2'>
                  <strong>Dr. Semelka</strong> prefers focusing on diet and
                  juicing before supplements, as their efficacy lacks randomized
                  controlled studies. He advises to stop any item that causes a
                  reaction.
                </p>
                <p className='text-gray-700'>
                  <strong>Dr. Wagner</strong> strongly advises{' '}
                  <strong>avoiding Vitamin C supplements</strong>{' '}
                  <em>before</em> an MRI with contrast, as it can react with
                  gadolinium to form harmful nanoparticles.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Personalization and Root Cause */}
        <article className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='text-3xl'>👩‍⚕️</span>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
              Personalization and Root Cause
            </h3>
          </div>

          <div className='space-y-4 text-gray-700'>
            <div>
              <p className='mb-2'>
                <strong>Consult Your Doctor:</strong> <strong>Always</strong>{' '}
                consult your doctor before starting new supplements or
                treatments, considering existing conditions, medications, and
                allergies.
              </p>
            </div>
            <div>
              <p className='mb-2'>
                <strong>Root Cause Focus:</strong> Dr. Walsh emphasizes a{' '}
                <strong>functional medicine approach</strong> to investigate and
                address the underlying causes (diet, lifestyle, toxic exposures,
                genetic factors) rather than just suppressing symptoms.
              </p>
            </div>
            <div>
              <p className='mb-2'>
                <strong>Metabolic State:</strong> Dr. Wagner highlights the
                importance of understanding your metabolic state, especially
                regarding a &quot;high oxalic state&quot; that may predispose
                you to severe gadolinium reactions.
              </p>
            </div>
            <div>
              <p>
                <strong>Personalized Protocols:</strong> Consider a personalized
                approach, such as an{' '}
                <strong>Autoimmune Protocol-like diet</strong> modified for
                gadolinium toxicity, heavy metals, and hypermobility (Dr.
                Walsh).
              </p>
            </div>
          </div>
        </article>

        {/* Genetic Factors and Additional Considerations */}
        <article className='bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='text-3xl'>🧬</span>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight'>
              Genetic Factors and Additional Considerations
            </h3>
          </div>

          <div className='space-y-4 text-gray-700'>
            <div>
              <p className='mb-2'>
                <strong>MTHFR Mutations:</strong> Individuals with{' '}
                <strong>
                  MTHFR (methylenetetrahydrofolate reductase) gene mutations
                </strong>{' '}
                may experience impaired detoxification processes, potentially
                making them more susceptible to heavy metal accumulation,
                including gadolinium. If you have an MTHFR mutation, consider
                working with a healthcare provider to support methylation
                pathways and liver function, which are crucial for effective
                detoxification.
              </p>
            </div>
            <div>
              <p className='mb-2'>
                <strong>Quercetin:</strong> A flavonoid with antioxidant and
                metal-chelating properties, has shown potential in forming
                complexes with metal ions like gadolinium and may help reduce
                oxidative stress associated with metal toxicity. However,
                research specifically on quercetin&apos;s efficacy for
                gadolinium toxicity is limited, and it should be considered as a
                potential supportive supplement rather than a primary treatment.
                Consult with your healthcare provider before adding quercetin to
                your protocol.
              </p>
              <p className='mb-2'>
                <strong>Heavy Metals and Mast Cell Destabilization:</strong> Heavy metals, including Gadolinium (often retained after MRI contrast), are known mast cell destabilizers. Gadolinium has been shown to directly trigger mast cell degranulation (the release of histamine) in laboratory studies. It can do this through direct toxicity or by irritating the cell membrane.
              </p>
              <p>
                If you have retained Gadolinium, your mast cells may be in a state of chronic &quot;hyper-excitability.&quot; They are ready to dump histamine at the slightest provocation (like stress, food, or alcohol). Quercetin may be particularly relevant in this context as it has mast cell stabilizing properties, though research specifically on quercetin for gadolinium-induced mast cell activation is limited.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhatHelpsSection;
