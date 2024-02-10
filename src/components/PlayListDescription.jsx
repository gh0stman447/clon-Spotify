import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

export const PlayListDescription = () => {
  return <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>;
};
