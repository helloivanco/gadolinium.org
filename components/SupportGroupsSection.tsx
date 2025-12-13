const SupportGroupsSection = () => {
  return (
    <section className='mb-32' aria-labelledby='support-heading'>
      <div className='text-center mb-20'>
        <h2
          id='support-heading'
          className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight'>
          Support Groups & Communities
        </h2>
        <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
          Connect with others who understand your journey
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Facebook Groups */}
        <article className='bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-10 hover:shadow-xl hover:border-gray-200 transition-all duration-300 ease-out'>
          <div className='mb-8 rounded-2xl overflow-hidden ring-1 ring-black/5'>
            <div className='relative w-full h-40 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50'>
              <div className='text-center'>
                <svg
                  className='w-16 h-16 text-blue-600 mx-auto mb-2'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
                <p className='text-xs text-gray-500 font-medium'>
                  Facebook Groups
                </p>
              </div>
            </div>
          </div>
          <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
            Facebook Groups
          </h3>
          <div className='space-y-5 text-gray-700 leading-relaxed'>
            <p className='text-gray-600 text-[15px] leading-relaxed'>
              Facebook hosts several active communities for individuals affected
              by gadolinium toxicity. These groups provide support, share
              experiences, and exchange information about treatments and
              doctors.
            </p>
            <div>
              <h4 className='font-semibold text-gray-900 mb-4 text-lg tracking-tight'>
                Main Groups:
              </h4>
              <ul className='list-none space-y-4 ml-0'>
                <li className='flex items-start group'>
                  <span className='text-blue-500 mr-4 mt-2 text-lg group-hover:scale-110 transition-transform'>
                    •
                  </span>
                  <a
                    href='https://www.facebook.com/groups/1431383276922546'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors duration-200 text-[15px]'
                    aria-label='Join MRI Gadolinium Contrast Safety Side Effects & Toxicity Research Facebook group'>
                    MRI Gadolinium Contrast Safety Side Effects & Toxicity
                    Research
                    <svg
                      className='w-4 h-4 text-gray-400 inline-block group-hover:translate-x-0.5 transition-transform'
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
                </li>
                <li className='flex items-start group'>
                  <span className='text-blue-500 mr-4 mt-2 text-lg group-hover:scale-110 transition-transform'>
                    •
                  </span>
                  <a
                    href='https://www.facebook.com/groups/3180876852210768'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors duration-200 text-[15px]'
                    aria-label='Join MRI Gadolinium Contrast Support Group on Facebook'>
                    MRI Gadolinium Contrast Support Group
                    <svg
                      className='w-4 h-4 text-gray-400 inline-block group-hover:translate-x-0.5 transition-transform'
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
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Groups.io */}
        <article className='bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-10 hover:shadow-xl hover:border-gray-200 transition-all duration-300 ease-out'>
          <div className='mb-8 rounded-2xl overflow-hidden ring-1 ring-black/5'>
            <div className='relative w-full h-40 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100/50'>
              <div className='text-center'>
                <svg
                  className='w-16 h-16 text-indigo-600 mx-auto mb-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <p className='text-xs text-gray-500 font-medium'>Groups.io</p>
              </div>
            </div>
          </div>
          <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
            Email Support Group
          </h3>
          <div className='space-y-5 text-gray-700 leading-relaxed'>
            <p className='text-gray-600 text-[15px] leading-relaxed'>
              A support group for people affected by gadolinium toxicity from
              Gadolinium-based Contrast Agents (GBCAs). Formed in 2012, members
              share support and information about dealing with symptoms.
              Membership requires application or invitation.
            </p>
            <div className='pt-2'>
              <a
                href='https://mri-gadolinium-toxicity.groups.io/g/Support'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mb-3 group'
                aria-label='Join MRI-Gadolinium-Toxicity support group on Groups.io'>
                Join the Support Group
                <svg
                  className='w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform'
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
              <p className='text-sm text-gray-500 mt-2'>
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
        </article>
      </div>
    </section>
  );
};

export default SupportGroupsSection;
