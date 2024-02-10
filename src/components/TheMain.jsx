import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { PlayList } from './PlayList';

const playLists = [
  {
    classes: '',
    src: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
    title: 'Playlist Title 1',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden sm:block',
    src: 'https://fakeimg.pl/600/7f12df/fff?text=Cover&font=lobster',
    title: 'Playlist Title 2',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden lg:block',
    src: 'https://fakeimg.pl/600/7f7f7f/fff?text=Cover&font=lobster',
    title: 'Playlist Title 4',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden xl:block',
    src: 'https://fakeimg.pl/600/7f1333/fff?text=Cover&font=lobster',
    title: 'Playlist Title 4',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden 2xl:block',
    src: 'https://fakeimg.pl/600/7f33d3/fff?text=Cover&font=lobster',
    title: 'Playlist Title 5',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden 3xl:block',
    src: 'https://fakeimg.pl/600/dd33d3/fff?text=Cover&font=lobster',
    title: 'Playlist Title 6',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden 4xl:block',
    src: 'https://fakeimg.pl/600/0033d3/fff?text=Cover&font=lobster',
    title: 'Playlist Title 7',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden 5xl:block',
    src: 'https://fakeimg.pl/600/5f33d3/fff?text=Cover&font=lobster',
    title: 'Playlist Title 8',
    description: LoremIpsum(),
  },
  {
    classes: 'hidden 6xl:block',
    src: 'https://fakeimg.pl/600/2f33d3/fff?text=Cover&font=lobster',
    title: 'Playlist Title 9',
    description: LoremIpsum(),
  },
];
export const TheMain = () => {
  return (
    <main className='text-white relative'>
      <div className='h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full'></div>
      <div className='relative pt-6 pb-[48px] px-8 space-y-9 max-w-screen-5xl'>
        <div>
          <div className='flex flex-wrap gap-x-6 justify-between items-end mb-[18px]'>
            <div>
              <h2 className='text-2xl font-semibold hover:underline'>
                <a href='/'>The state of music today</a>
              </h2>
            </div>
            <a
              href='/'
              className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'
            >
              see all
            </a>
          </div>
          <div className='grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5'>
            {playLists.map((playList) => (
              <PlayList key={playList.title} {...playList} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
