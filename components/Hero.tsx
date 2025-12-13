import Image from 'next/image';

const Hero = () => {
  return (
    <header className='relative bg-gradient-to-b from-gray-50 via-white to-white'>
      {/* Hero Image - Full Width from Top */}
      <div className='relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden'>
        {/* Background Image */}
        <Image
          src='/mri.webp'
          alt='MRI scan showing medical imaging technology'
          fill
          className='object-cover'
          priority
          sizes='100vw'
          quality={90}
        />
        {/* Refined Gradient Overlay */}
        <div
          className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60'
          aria-hidden='true'></div>

        {/* Title and Description Overlay */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
            <div className='text-center max-w-4xl mx-auto space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight drop-shadow-lg'>
                <span className='block'>Gadolinium</span>
                <span className='block text-gray-100 mt-2 font-light'>
                  Toxicity Resources
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-white leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md'>
                A comprehensive guide connecting you with leading medical
                professionals, treatment options, and supportive communities.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div
          className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent'
          aria-hidden='true'></div>
      </div>
    </header>
  );
};

export default Hero;
