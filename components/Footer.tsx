const Footer = () => {
  return (
    <footer
      className='bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/60 py-20 mt-32'
      role='contentinfo'
      aria-label='Site footer'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='text-center'>
          <p className='text-gray-700 text-xl md:text-2xl font-semibold mb-4 tracking-tight'>
            Gadolinium Toxicity Resources
          </p>
          <p className='text-gray-600 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed font-light'>
            Providing information and support for those affected
          </p>
          <div className='space-y-3'>
            <p className='text-gray-500 text-xs md:text-sm'>
              © {new Date().getFullYear()} Gadolinium.org. All rights reserved.
            </p>
            <p className='text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto'>
              Affiliate Disclosure: Some links may earn a commission that
              supports those affected by gadolinium toxicity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
