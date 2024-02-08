import React from 'react';
import { CiSearch, CiHome, CiHeart } from 'react-icons/ci';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { GoPlus } from 'react-icons/go';

export const TheNav = () => {
  return (
    <nav>
      <a href='#' className='flex items-center text-white bg-[#282828] px-2 py-2 mx-2 mx-4 rounded'>
        <CiHome className='h-8 w-8' />
        <span className='ml-4 text-sm font-semibold'>Home</span>
      </a>
      <a
        href='#'
        className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
      >
        <CiSearch className='h-8 w-8' />
        <span className='ml-4 text-sm font-semibold'>Search</span>
      </a>
      <a
        href='#'
        className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300 mb-6'
      >
        <HiOutlineBuildingLibrary className='h-8 w-8' />
        <span className='ml-4 text-sm font-semibold'>Your Library</span>
      </a>
      <a
        href='#'
        className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
      >
        <GoPlus className='h-8 w-8' />
        <span className='ml-4 text-sm font-semibold'>Create Playlist</span>
      </a>
      <a
        href='#'
        className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
      >
        <CiHeart className='h-8 w-8' />
        <span className='ml-4 text-sm font-semibold'>Liked Songs</span>
      </a>
    </nav>
  );
};
