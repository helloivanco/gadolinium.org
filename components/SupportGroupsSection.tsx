import { Facebook, Users, ExternalLink } from 'lucide-react';

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
        <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/60 p-8 md:p-10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group'>
          <div className='mb-8 rounded-2xl overflow-hidden ring-1 ring-black/5'>
            <div className='relative w-full h-40 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50'>
              <div className='text-center'>
                <Facebook
                  className='w-16 h-16 text-blue-600 mx-auto mb-2'
                  aria-hidden='true'
                />
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
                <li className='flex items-center group'>
                  <span className='text-blue-500 mr-4 text-lg group-hover:scale-110 transition-transform flex-shrink-0'>
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
                    <ExternalLink
                      className='w-4 h-4 text-gray-400 inline-block group-hover:translate-x-0.5 transition-transform'
                      aria-hidden='true'
                    />
                  </a>
                </li>
                <li className='flex items-center group'>
                  <span className='text-blue-500 mr-4 text-lg group-hover:scale-110 transition-transform flex-shrink-0'>
                    •
                  </span>
                  <a
                    href='https://www.facebook.com/groups/3180876852210768'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors duration-200 text-[15px]'
                    aria-label='Join MRI Gadolinium Contrast Support Group on Facebook'>
                    MRI Gadolinium Contrast Support Group
                    <ExternalLink
                      className='w-4 h-4 text-gray-400 inline-block group-hover:translate-x-0.5 transition-transform'
                      aria-hidden='true'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Groups.io */}
        <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/60 p-8 md:p-10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group'>
          <div className='mb-8 rounded-2xl overflow-hidden ring-1 ring-black/5'>
            <div className='relative w-full h-40 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100/50'>
              <div className='text-center'>
                <Users
                  className='w-16 h-16 text-indigo-600 mx-auto mb-2'
                  aria-hidden='true'
                />
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
                <ExternalLink
                  className='w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform'
                  aria-hidden='true'
                />
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
