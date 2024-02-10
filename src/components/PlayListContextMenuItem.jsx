import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PlayListContextMenu } from './PlayListContextMenu';

const subMenuClasses =
  'bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute cursor-default absolute top-0 left-full z-10 hidden peer-hover:block hover:block';

export const PlayListContextMenuItem = ({ children: label, subMenuItems }) => {
  if (subMenuItems) {
    return (
      <>
        <li className='relative'>
          <button
            className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] 
            cursor-default flex items-center justify-between peer'
          >
            {label} <MdKeyboardArrowRight className='w-4 h-4' />
          </button>
          <PlayListContextMenu menuItems={subMenuItems} classes={subMenuClasses} />
        </li>
      </>
    );
  }
  return (
    <>
      <li>
        <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
          {label}
        </button>
      </li>
    </>
  );
};
