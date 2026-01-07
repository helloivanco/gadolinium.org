'use client';

import Image from 'next/image';
import { useState, type KeyboardEvent, type MouseEvent } from 'react';

const HistamineFoodsImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className='w-full'>
      <button
        type='button'
        onClick={handleOpen}
        className='group block w-full max-w-xl mx-auto focus-visible:outline-none'
        aria-label='Open larger view of high histamine foods image'>
        <div className='overflow-hidden rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.16)] border border-gray-200 bg-white'>
          <Image
            src='/high_histamine_foods.jpg'
            alt='Thumbnail of common high histamine foods that some people may choose to limit or avoid.'
            width={800}
            height={533}
            className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]'
          />
        </div>
        <p className='mt-2 text-xs text-gray-500 text-center'>
          Tap or click to view larger image
        </p>
      </button>

      {isOpen ? (
        <div
          className='fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4'
          role='dialog'
          aria-modal='true'
          aria-label='Enlarged view of high histamine foods image'
          onKeyDown={handleKeyDown}>
          <button
            type='button'
            className='absolute top-4 right-4 text-white/80 hover:text-white text-sm md:text-base px-3 py-1.5 rounded-full bg-black/40 border border-white/30 backdrop-blur-sm focus-visible:outline-none'
            onClick={handleClose}
            aria-label='Close enlarged image'>
            Close
          </button>
          <div className='max-w-5xl w-full'>
            <div className='overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.55)] bg-black'>
              <Image
                src='/high_histamine_foods.jpg'
                alt='Enlarged illustration of common high histamine foods that some people may choose to limit or avoid.'
                width={1600}
                height={1066}
                className='w-full h-auto object-contain'
                priority={false}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HistamineFoodsImage;


