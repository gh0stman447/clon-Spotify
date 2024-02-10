import React from 'react';
import { TheRegistranionInfo } from './TheRegistranionInfo';
import { TheRegistrationButton } from './UI/TheRegistrationButton';

export const TheRegistration = () => {
  return (
    <a
      href='/'
      className='bg-violet-700 bg-gradient-to-r from-[#af2896] to=[#509bf5] text-white py-8 px-8 flex flex-wrap gap-y-2 gap-x-6 justify-center justify-between items-center'
    >
      <TheRegistranionInfo />
      <TheRegistrationButton />
    </a>
  );
};
