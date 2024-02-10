import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { PlayList } from './PlayList';

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
            <PlayList />
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/365e90/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/1c4a55/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group relative hidden 2xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
              <ul className='bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block'>
                <li>
                  <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default '>
                    Add to Your Library
                  </button>
                </li>
                <li className='relative'>
                  <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex items-center justify-between'>
                    Share
                    <button>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-4 h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </button>
                  </button>
                  <ul className='bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl absolute top-9 left-9 cursor-default absolute top-0 left-full z-10'>
                    <li>
                      <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default '>
                        Copy link to your playlist
                      </button>
                    </li>
                    <li>
                      <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default '>
                        Embet playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default '>
                    About recommendations
                  </button>
                </li>
                <li>
                  <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default '>
                    Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/365e90/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/1c4a55/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
            <a
              href='/'
              className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block'
            >
              <div className='relative'>
                <img
                  src='https://fakeimg.pl/600/1c4a55/fff?text=Cover&font=lobster'
                  className='rounded shadow-lg'
                />
                <buttom
                  className='h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex
                      items-center justify-center hover:cursor-default duration-200 opacity-0 translate-y-3 
                      group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    />
                  </svg>
                </buttom>
              </div>
              <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>Playlist Title</h3>
              <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
