import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import { PlayListCover } from './PlayListCover';
import { PlayListButtonPlay } from './PlayListButtonPlay';
import { PlayListTitle } from './PlayListTitle';
import { PlayListDescription } from './PlayListDescription';
import { PlayListContextMenu } from './PlayListContextMenu';

export const PlayList = () => {
  return (
    <a
      href='/'
      className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group relative'
    >
      <div className='relative'>
        <PlayListCover />
        <PlayListButtonPlay />
      </div>
      <PlayListTitle />
      <PlayListDescription />
      <PlayListContextMenu />
    </a>
  );
};
