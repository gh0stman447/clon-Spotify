import React, { useState } from 'react';
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

const menuClasses =
  'bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e]';

export const PlayList = ({ classes, src, title, description }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const bgClasses = isContextMenuOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]';

  const openContextMenu = (e) => {
    e.preventDefault();
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
        <PlayListContextMenu
          classes={menuClasses}
          menuItems={menuItems}
          onClose={closeContextMenu}
        />
      )}
    </a>
  );
};
