import Image from 'next/image';

const Hero = () => {
  return (
    <header className='relative bg-white'>
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
        {/* Refined Gradient Overlay - Apple-style subtle depth */}
        <div
          className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65'
          aria-hidden='true'></div>

        {/* Title and Description Overlay */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-6 sm:px-8 w-full'>
            <div className='text-center max-w-4xl mx-auto space-y-8'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'>
                <span className='block'>Gadolinium</span>
                <span className='block text-white/95 mt-3 font-light text-4xl md:text-5xl lg:text-6xl'>
                  Toxicity Resources
                </span>
              </h1>
              <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] px-4'>
                A comprehensive guide connecting you with leading medical
                professionals, treatment options, and supportive communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
