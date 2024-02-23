import React, { useRef, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PlayListContextMenu } from './PlayListContextMenu';

export const PlayListContextMenuItem = ({ children: label, subMenuItems }) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: '',
  });
  const menuItemRef = useRef(null);

  const subMenuClasses = `bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute cursor-default absolute z-10 ${menuState.positionClasses}`;

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

  function getMenuPositionClasses() {
    return `${getMenuPositionYClass()} ${getMenuPositionXClass()}`;
  }

  function openMenu() {
    setMenuState({
      isOpen: true,
      positionClasses: getMenuPositionClasses(),
    });
  }

  function closeMenu() {
    setMenuState({
      isOpen: false,
      positionClasses: '',
    });
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
          {menuState.isOpen && (
            <PlayListContextMenu menuItems={subMenuItems} classes={subMenuClasses} />
          )}
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
