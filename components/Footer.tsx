const Footer = () => {
  return (
    <footer
      className='bg-gray-50 border-t border-gray-100 py-16 mt-32'
      role='contentinfo'
      aria-label='Site footer'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='text-center'>
          <p className='text-gray-600 text-lg md:text-xl font-medium mb-3 tracking-tight'>
            Gadolinium Toxicity Resources
          </p>
          <p className='text-gray-500 text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed'>
            Providing information and support for those affected
          </p>
          <p className='text-gray-400 text-xs md:text-sm'>
            © {new Date().getFullYear()} Gadolinium.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
