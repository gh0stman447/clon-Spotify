import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TheButtonRegister } from './UI/TheButtonRegister';
import { TheButtonLogin } from './UI/TheButtonLogin';

export const TheHeader = () => {
  return (
    <header className='bg-[#070707] flex flex-1 py-3 px-8 justify-between sticky top-0 z-20'>
      <div className='flex gap-4 items-center'>
        <a href='#sidebar' className='text-[#969696] p-1 inline-block lg:hidden -ml-1.5'>
          <RxHamburgerMenu className='w-7 h-7' />
        </a>
        <a href='/' className='text-[#969696] p-1 cursor-not-allowed'>
          <IoIosArrowBack className='w-7 h-7' />
        </a>
        <a href='/' className='text-[#969696] p-1'>
          <IoIosArrowForward className='w-7 h-7' />
        </a>
      </div>
      <div className='gap-2 font-semibold text-xs'>
        <TheButtonRegister />
        <TheButtonLogin />
      </div>
    </header>
  );
};
