import React, { useRef, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PlayListContextMenu } from './PlayListContextMenu';

export const PlayListContextMenuItem = ({ children: label, subMenuItems }) => {
  const [menuPositionClass, setMenuPositionClass] = useState('left-full');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemRef = useRef(null);

  const subMenuClasses = `bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute cursor-default absolute top-0  z-10 ${menuPositionClass}`;

  function getMenuPositionClass() {
    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemEndCoordinate = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft = menuWidth > windowWidth - menuItemEndCoordinate;

    return shouldMoveMenuLeft ? 'right-full' : 'left-full';
  }

  function openMenu() {
    setIsMenuOpen(true);
    setMenuPositionClass(getMenuPositionClass());
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  if (subMenuItems) {
    return (
      <>
        <li className='relative' onMouseEnter={openMenu} onMouseLeave={closeMenu} ref={menuItemRef}>
          <button
            className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] 
            cursor-default flex items-center justify-between'
          >
            {label} <MdKeyboardArrowRight className='w-4 h-4' />
          </button>
          {isMenuOpen && <PlayListContextMenu menuItems={subMenuItems} classes={subMenuClasses} />}
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
