import Image from 'next/image';
import Link from 'next/link';

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
  book?: {
    title: string;
    image: string;
    description: string;
    link: string;
    linkText?: string;
  };
  registry?: {
    title: string;
    image: string;
    imageFullSize: string;
    description: string;
    criteria?: string[];
    contact?: string;
  };
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
  book,
  registry,
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
    <article className='bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200/60 p-8 md:p-12 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group'>
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
          <h3 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-200'>
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
              <li key={index} className='flex items-center group'>
                <span
                  className={`${colors.bullet} mr-4 text-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
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
        {book && (
          <div className='bg-white border-2 border-blue-200/80 rounded-2xl p-6 hover:border-blue-300/80 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-all duration-300'>
            <div className='flex flex-col sm:flex-row gap-4 items-start'>
              <div className='flex-shrink-0'>
                <div className='relative w-32 h-44 rounded-lg overflow-hidden border border-gray-300 shadow-md'>
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className='object-cover'
                    sizes='128px'
                  />
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Learn More from {name.split(' ').slice(-1)[0]}
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed text-[15px]'>
                  {book.description}
                </p>
                <Link
                  href={book.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-[0_2px_8px_rgba(0,122,255,0.3)] hover:shadow-[0_4px_12px_rgba(0,122,255,0.4)] active:scale-[0.98]'>
                  <span>{book.linkText || 'View Book on Amazon'}</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
        {registry && (
          <div className='bg-white border-2 border-green-200/80 rounded-2xl p-6 hover:border-green-300/80 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-all duration-300'>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Research Registry
            </h3>
            <div className='flex flex-col sm:flex-row gap-4 items-start mb-4'>
              <div className='flex-shrink-0'>
                <Link
                  href={registry.imageFullSize}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block relative w-32 h-44 rounded-lg overflow-hidden border border-gray-300 shadow-md hover:shadow-lg transition-shadow'>
                  <Image
                    src={registry.image}
                    alt={registry.title}
                    fill
                    className='object-cover'
                    sizes='128px'
                  />
                  <div className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center'>
                    <svg
                      className='w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                      />
                    </svg>
                  </div>
                </Link>
                <p className='text-xs text-gray-500 mt-2 text-center'>
                  Click to view full size
                </p>
              </div>
              <div className='flex-1'>
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                  {registry.title}
                </h4>
                <p className='text-gray-700 mb-4 leading-relaxed text-[15px]'>
                  {registry.description}
                </p>
                {registry.criteria && registry.criteria.length > 0 && (
                  <div className='mb-4'>
                    <p className='font-semibold text-gray-900 mb-2 text-[15px]'>
                      We are looking for people who fit the following criteria:
                    </p>
                    <ul className='list-none space-y-2 ml-0'>
                      {registry.criteria.map((criterion, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='text-green-600 mr-3 mt-1 flex-shrink-0'>
                            •
                          </span>
                          <span className='text-gray-700 leading-relaxed text-[15px]'>
                            {criterion}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {registry.contact && (
                  <p className='text-gray-700 leading-relaxed text-[15px]'>
                    <strong>Contact:</strong> {parseLinks(registry.contact)}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default DoctorCard;
