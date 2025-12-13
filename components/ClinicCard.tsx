type ClinicCardProps = {
  name: string;
  title?: string;
  clinicName?: string;
  address?: string;
  city: string;
  state?: string;
  zip?: string;
  phone?: string;
  fax?: string;
  email?: string;
  website?: string;
  consultation?: string;
  whatsapp?: string;
  tollFree?: string;
  region: string;
};

const ClinicCard = ({
  name,
  title,
  clinicName,
  address,
  city,
  state,
  zip,
  phone,
  fax,
  email,
  website,
  consultation,
  whatsapp,
  tollFree,
  region,
}: ClinicCardProps) => {
  const fullAddress =
    [address, city, state, zip].filter(Boolean).join(', ') || city;

  return (
    <article className='bg-white rounded-2xl shadow-sm border border-gray-100/80 p-6 md:p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300 ease-out h-full flex flex-col'>
      <div className='mb-6'>
        <p className='text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wider'>
          {region}
        </p>
        <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3 tracking-tight leading-tight'>
          {name}
        </h3>
        {title && (
          <p className='text-gray-600 mb-3 text-sm leading-relaxed'>{title}</p>
        )}
        {clinicName && (
          <p className='text-gray-700 font-medium mb-5 text-base'>
            {clinicName}
          </p>
        )}
      </div>

      <div className='space-y-3 text-gray-600 text-sm md:text-base flex-grow'>
        {fullAddress && (
          <div className='flex items-start'>
            <svg
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span className='leading-relaxed text-[15px]'>{fullAddress}</span>
          </div>
        )}

        {phone && (
          <div className='flex items-start'>
            <svg
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className='text-gray-700 hover:text-blue-600 transition-colors duration-200 text-[15px]'>
              {phone}
            </a>
          </div>
        )}

        {fax && (
          <div className='flex items-start'>
            <span className='text-gray-400 mr-3 text-xs font-medium'>F:</span>
            <span className='text-gray-600'>{fax}</span>
          </div>
        )}

        {whatsapp && (
          <div className='flex items-start'>
            <span className='text-gray-400 mr-3 text-xs font-medium'>
              WhatsApp:
            </span>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-blue-600 transition-colors duration-200 text-[15px]'>
              {whatsapp}
            </a>
          </div>
        )}

        {tollFree && (
          <div className='flex items-start'>
            <span className='text-gray-400 mr-3 text-xs font-medium'>
              Toll-Free:
            </span>
            <a
              href={`tel:${tollFree.replace(/\s/g, '')}`}
              className='text-gray-600 hover:text-blue-600 transition-colors duration-200 text-[15px]'>
              {tollFree}
            </a>
          </div>
        )}

        {email && (
          <div className='flex items-start'>
            <svg
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <a
              href={`mailto:${email}`}
              className='text-blue-600 hover:text-blue-700 break-all transition-colors duration-200 text-[15px]'>
              {email}
            </a>
          </div>
        )}

        {website && (
          <div className='flex items-start'>
            <svg
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
              />
            </svg>
            <a
              href={website.startsWith('http') ? website : `https://${website}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-700 break-all transition-colors duration-200 text-[15px]'>
              {website}
            </a>
          </div>
        )}

        {consultation && (
          <div className='flex items-start'>
            <svg
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <a
              href={
                consultation.startsWith('http')
                  ? consultation
                  : `https://${consultation}`
              }
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-700 break-all font-medium transition-colors duration-200 text-[15px]'>
              Schedule a consultation
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ClinicCard;
