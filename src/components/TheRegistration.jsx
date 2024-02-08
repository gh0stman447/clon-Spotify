import React from 'react';

export const TheRegistration = () => {
  return (
    <a
      href='/'
      className='bg-violet-700 bg-gradient-to-r from-[#af2896] to=[#509bf5] text-white py-8 px-8 flex flex-wrap gap-y-2 gap-x-6 justify-center justify-between items-center'
    >
      <div>
        <p className='text-xs uppercase tracking-wider mb-1'>Preview of Spotify</p>
        <p className='leading-6 text-[14px] tracking-wider'>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>
      <button className='text-[#2c77d0] text-[14px] bg-white py-3 px-[48px] font-semibold rounded-full uppercase leading-5 tracking-widest hover:scale-105'>
        Sign up free
      </button>
    </a>
  );
};
