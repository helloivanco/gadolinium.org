const Disclaimer = () => {
  return (
    <section
      className='bg-gradient-to-br from-amber-50/50 to-yellow-50/50 border border-amber-100/80 rounded-3xl p-8 md:p-12 mb-12 ring-1 ring-black/5'
      aria-labelledby='disclaimer-heading'>
      <h3
        id='disclaimer-heading'
        className='text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight'>
        Important Disclaimer
      </h3>
      <p className='text-gray-700 leading-relaxed text-[15px] md:text-base'>
        This resource page is provided for informational purposes only and does
        not constitute medical advice. Always consult with qualified healthcare
        professionals before making decisions about your health or treatment
        options. The information about doctors and treatments is based on
        general knowledge and may not reflect current practices or availability.
        Contact information and practice details should be verified
        independently.
      </p>
    </section>
  );
};

export default Disclaimer;
