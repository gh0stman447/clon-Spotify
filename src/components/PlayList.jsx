import React, { useEffect, useRef, useState } from 'react';
import { PlayListCover } from './PlayListCover';
import { PlayListButtonPlay } from './PlayListButtonPlay';
import { PlayListTitle } from './PlayListTitle';
import { PlayListDescription } from './PlayListDescription';
import { PlayListContextMenu } from './PlayListContextMenu';

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
const clickPosition = { x: null, y: null };

export const PlayList = ({ classes, src, title, description, toggleScrolling }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const bgClasses = isContextMenuOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]';
  const menuClasses = `bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl fixed z-20
    cursor-default whitespace-nowrap divide-y divide-[#3e3e3e]`;

  function updateContextMenuPosition() {
    contextMenuRef.current.style.top = `${clickPosition.y}px`;
    contextMenuRef.current.style.left = `${clickPosition.x}px`;
  }
  useEffect(() => {
    toggleScrolling(!isContextMenuOpen);
    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  });

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway(event) {
      if (!contextMenuRef.current.contains(event.target) && closeContextMenu) {
        closeContextMenu();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        closeContextMenu();
      }
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
    };
  });
  const openContextMenu = (event) => {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;
    console.log(clickPosition);

    setIsContextMenuOpen(true);
  };

  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }

  return (
    <a
      href='/'
      className={`p-4 rounded-md duration-200 group relative ${classes} ${bgClasses}`}
      onContextMenu={openContextMenu}
      onClick={(e) => e.preventDefault()}
    >
      <div className='relative'>
        <PlayListCover src={src} />
        <PlayListButtonPlay />
      </div>
      <PlayListTitle title={title} />
      <PlayListDescription description={description} />
      {isContextMenuOpen && (
        <PlayListContextMenu ref={contextMenuRef} classes={menuClasses} menuItems={menuItems} />
      )}
    </a>
  );
};
