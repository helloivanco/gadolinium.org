import Image from 'next/image';

type DoctorCardProps = {
  name: string;
  specialty: string;
  title: string;
  color: 'blue' | 'green' | 'purple';
  background: string;
  approach: string;
  whatWorks: string[];
  howToReach: string;
  image?: string;
};

const DoctorCard = ({
  name,
  specialty,
  title,
  color,
  background,
  approach,
  whatWorks,
  howToReach,
  image,
}: DoctorCardProps) => {
  const colorClasses = {
    blue: {
      gradient: 'from-blue-50 to-blue-100',
      border: 'border-blue-100',
      icon: 'text-blue-500',
      bullet: 'text-blue-500',
    },
    green: {
      gradient: 'from-green-50 to-green-100',
      border: 'border-green-100',
      icon: 'text-green-500',
      bullet: 'text-green-500',
    },
    purple: {
      gradient: 'from-purple-50 to-purple-100',
      border: 'border-purple-100',
      icon: 'text-purple-500',
      bullet: 'text-purple-500',
    },
  };

  const colors = colorClasses[color];

  // Function to parse URLs and email addresses and make them clickable
  const parseLinks = (text: string) => {
    // Match URLs (http/https) and mailto links, or standalone email addresses
    const linkRegex =
      /(https?:\/\/[^\s|]+|mailto:[^\s|]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(linkRegex);

    return parts.map((part, index) => {
      // Check if part is a URL (http/https)
      if (/^https?:\/\//.test(part)) {
        return (
          <span key={index} className='inline-flex items-center gap-1'>
            <a
              href={part}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:text-blue-800 underline font-medium'>
              {part}
            </a>
            <svg
              className='w-4 h-4 text-gray-500 inline-block'
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
          </span>
        );
      }
      // Check if part is a mailto link
      if (/^mailto:/.test(part)) {
        const email = part.replace(/^mailto:/, '');
        return (
          <a
            key={index}
            href={part}
            className='text-blue-600 hover:text-blue-800 underline font-medium'>
            {email}
          </a>
        );
      }
      // Check if part is a standalone email address
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className='text-blue-600 hover:text-blue-800 underline font-medium'>
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <article className='bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-12 hover:shadow-xl hover:border-gray-200 transition-all duration-300 ease-out'>
      <div className='flex flex-col md:flex-row gap-8 mb-10'>
        {/* Doctor Image */}
        <div className='flex-shrink-0'>
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center overflow-hidden shadow-sm border ${colors.border} ring-1 ring-black/5`}>
            {image ? (
              <Image
                src={image}
                alt={`${name}, ${specialty}`}
                width={160}
                height={160}
                className='w-full h-full object-cover'
                sizes='(max-width: 768px) 128px, 160px'
                quality={90}
              />
            ) : (
              <div className='text-center'>
                <svg
                  className={`w-16 h-16 md:w-20 md:h-20 ${colors.icon} mx-auto`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
                <p className='text-xs text-gray-400 mt-2 font-medium'>Photo</p>
              </div>
            )}
          </div>
        </div>
        <div className='flex-1'>
          <h3 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight leading-tight'>
            {name}
          </h3>
          <p className='text-lg md:text-xl text-gray-600 mb-2 font-medium'>
            {specialty}
          </p>
          <p className='text-base text-gray-500 leading-relaxed'>{title}</p>
        </div>
      </div>
      <div className='space-y-8 text-gray-700 leading-relaxed'>
        <div>
          <h4 className='font-semibold text-gray-900 mb-4 text-xl tracking-tight'>
            Background
          </h4>
          <p className='text-gray-600 leading-relaxed text-[15px]'>
            {background}
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900 mb-4 text-xl tracking-tight'>
            Approach
          </h4>
          <p className='text-gray-600 leading-relaxed text-[15px]'>
            {approach}
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900 mb-4 text-xl tracking-tight'>
            What Works/Helps
          </h4>
          <ul className='list-none space-y-3 ml-0'>
            {whatWorks.map((item, index) => (
              <li key={index} className='flex items-start group'>
                <span
                  className={`${colors.bullet} mr-4 mt-2 text-lg group-hover:scale-110 transition-transform`}>
                  •
                </span>
                <span className='text-gray-600 leading-relaxed text-[15px] flex-1'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900 mb-4 text-xl tracking-tight'>
            How to Reach
          </h4>
          <p className='text-gray-600 mb-6 leading-relaxed text-[15px]'>
            {parseLinks(howToReach)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default DoctorCard;
