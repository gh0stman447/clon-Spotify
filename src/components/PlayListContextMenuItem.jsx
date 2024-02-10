import React from 'react';
import { PlayListContextSubMenu } from './PlayListContextSubMenu';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const PlayListContextMenuItem = ({ children: label, subMenuItems }) => {
  let classes = '';
  let buttonClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default';
  let icon = null;
  let subMenu = null;

  if (subMenuItems) {
    classes = 'relative';
    buttonClasses = `${buttonClasses} flex items-center justify-between`;
    icon = <MdKeyboardArrowRight className='w-4 h-4' />;
    subMenu = <PlayListContextSubMenu menuItems={subMenuItems} />;
  }

  return (
    <>
      <li className={classes}>
        <button className={buttonClasses}>
          {label} {icon}
        </button>
        {subMenu}
      </li>
    </>
  );
};
