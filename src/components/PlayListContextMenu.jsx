import React from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';

const menuItems = [
  {
    label: 'Add to Your Library',
  },
  {
    label: 'Share',
    subMenuItems: [
      {
        label: 'Copy link to your playlist',
      },
      {
        label: 'Embed playlist',
      },
    ],
  },
  {
    label: 'About recommendations',
  },
  {
    label: 'Open in Desktop app',
  },
];

export const PlayListContextMenu = () => {
  return (
    <ul className='bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block'>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlayListContextMenuItem>
      ))}
    </ul>
  );
};
