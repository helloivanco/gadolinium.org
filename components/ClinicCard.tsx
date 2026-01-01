import { MapPin, Phone, Mail, Link as LinkIcon, Calendar } from 'lucide-react';

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
    <article className='bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/60 p-6 md:p-8 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-full flex flex-col group'>
      <div className='mb-6'>
        <p className='text-xs font-semibold text-blue-600 mb-4 uppercase tracking-wider'>
          {region}
        </p>
        <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-200'>
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
            <MapPin
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0'
              aria-hidden='true'
            />
            <span className='leading-relaxed text-[15px]'>{fullAddress}</span>
          </div>
        )}

        {phone && (
          <div className='flex items-start'>
            <Phone
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0'
              aria-hidden='true'
            />
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className='text-gray-700 hover:text-blue-600 transition-colors duration-200 text-[15px] font-medium'>
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
            <Mail
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0'
              aria-hidden='true'
            />
            <a
              href={`mailto:${email}`}
              className='text-blue-600 hover:text-blue-700 break-all transition-colors duration-200 text-[15px]'>
              {email}
            </a>
          </div>
        )}

        {website && (
          <div className='flex items-start'>
            <LinkIcon
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0'
              aria-hidden='true'
            />
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
            <Calendar
              className='w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0'
              aria-hidden='true'
            />
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
