import React, { useRef, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PlayListContextMenu } from './PlayListContextMenu';

export const PlayListContextMenuItem = ({ children: label, subMenuItems }) => {
  const [menuPositionXClass, setMenuPositionXClass] = useState('left-full');
  const [menuPositionYClass, setMenuPositionYClass] = useState('top-0');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemRef = useRef(null);

  const subMenuClasses = `bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute cursor-default absolute z-10 ${menuPositionYClass} ${menuPositionXClass}`;

  function getMenuPositionXClass() {
    const menuItem = menuItemRef.current;
    const menuItemWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemRightCoordX = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft = menuItemWidth > windowWidth - menuItemRightCoordX;

    return shouldMoveMenuLeft ? 'right-full' : 'left-full';
  }

  function getMenuPositionYClass() {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? 'bottom-0' : 'top-0';
  }

  function openMenu() {
    setIsMenuOpen(true);
    setMenuPositionXClass(getMenuPositionXClass());
    setMenuPositionYClass(getMenuPositionYClass());
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
