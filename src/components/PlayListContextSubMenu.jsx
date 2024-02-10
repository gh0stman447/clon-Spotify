import React from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';

export const PlayListContextSubMenu = ({ menuItems }) => {
  return (
    <ul className='bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute top-9 left-9 cursor-default absolute top-0 left-full z-10'>
      {menuItems.map(({ label }) => (
        <PlayListContextMenuItem key={label}>{label}</PlayListContextMenuItem>
      ))}
    </ul>
  );
};
