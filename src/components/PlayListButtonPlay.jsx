import React from 'react';
import { HiOutlinePlay } from 'react-icons/hi2';

export const PlayListButtonPlay = () => {
  return (
    <buttom
      className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
    >
      <HiOutlinePlay className='w-6 h-6' />
    </buttom>
  );
};
