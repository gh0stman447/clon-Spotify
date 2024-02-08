import React from 'react';

export const TheHeader = () => {
  return (
    <header className='bg-[#070707] flex flex-1 py-3 px-8 justify-between sticky top-0 z-20'>
      <div className='flex gap-4 items-center'>
        <a href='#sidebar' className='text-[#969696] p-1 inline-block lg:hidden -ml-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </a>
        <a href='/' className='text-[#969696] p-1 cursor-not-allowed'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </a>
        <a href='/' className='text-[#969696] p-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </a>
      </div>
      <div className='gap-2 font-semibold text-xs'>
        <button className='uppercase py-3 px-[17px] sm:px-9 text-white rounded-full leading-5 tracking-widest hover:scale-105'>
          Sign Up
        </button>
        <button className='text-[#2e2e2e] bg-white py-3 px-[17px] sm:px-9 rounded-full uppercase leading-5 tracking-widest hover:scale-105'>
          Log In
        </button>
      </div>
    </header>
  );
};
