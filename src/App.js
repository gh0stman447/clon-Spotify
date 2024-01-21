import Logo from './assets/Logo2.svg';
import loremIpsum, { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  return (
    <div className='flex flex-col bg-[#121212] h-screen'>
      <div className='flex overflow-auto'>
        <aside className='bg-black w-[256px] text-[#b2b2b2] flex flex-col sticky top-0'>
          <a href='#' className='text-white inline-block my-6 px-6 w-full'>
            <div className='flex items-center gap-2'>
              <img src={Logo} width={'60px'} className='z-10' alt='123'></img>
              <p className='font-bold text-4xl text-white'>Spotify</p>
            </div>
          </a>
          <nav>
            <a
              href='#'
              className='flex items-center text-white bg-[#282828] px-2 py-2 mx-2 mx-4 rounded'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>

              <span className='ml-4 text-sm font-semibold'>Home</span>
            </a>
            <a
              href='#'
              className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>

              <span className='ml-4 text-sm font-semibold'>Search</span>
            </a>
            <a
              href='#'
              className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300 mb-6'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z'
                />
              </svg>

              <span className='ml-4 text-sm font-semibold'>Your Library</span>
            </a>
            <a
              href='#'
              className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>

              <span className='ml-4 text-sm font-semibold'>Create Playlist</span>
            </a>
            <a
              href='#'
              className='flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>

              <span className='ml-4 text-sm font-semibold'>Liked Songs</span>
            </a>
          </nav>
          <footer className='mt-auto pl-8 pb-8'>
            <ul className='flex flex-col gap-2'>
              <li>
                <a href='#' className='text-[11px] hover:underline py-2'>
                  Cookies
                </a>
              </li>
              <li>
                <a href='#' className='text-[11px] hover:underline py-2'>
                  Privacy
                </a>
              </li>
            </ul>
          </footer>
        </aside>
        <div className='flex-1'>
          <header className='bg-[#070707] flex flex-1 py-3 px-8 justify-between sticky top-0 z-10'>
            <div className='flex gap-4'>
              <a href='#' className='text-[#969696] p-1 cursor-not-allowed'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 19.5 8.25 12l7.5-7.5'
                  />
                </svg>
              </a>
              <a href='#' className='text-[#969696] p-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </a>
            </div>
            <div className='flex gap-2 font-semibold text-xs'>
              <button className='uppercase py-3 px-9 text-white rounded-full leading-5 tracking-widest hover:scale-105'>
                Sign Up
              </button>
              <button className='text-[#2e2e2e] bg-white py-3 px-9 rounded-full uppercase leading-5 tracking-widest hover:scale-105'>
                Log In
              </button>
            </div>
          </header>
          <main className='text-white relative'>
            <div className='h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full'></div>
            <div className='relative pt-6 pb-[48px] px-8 space-y-9'>
              <div>
                <div className='flex justify-between items-end mb-[18px]'>
                  <div>
                    <h2 className='text-2xl font-semibold hover:underline'>
                      <a href='#'>The state of music today</a>
                    </h2>
                  </div>
                  <a
                    href='#'
                    className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'
                  >
                    see all
                  </a>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                </div>
              </div>
              <div>
                <div className='flex justify-between items-end mb-[18px]'>
                  <div>
                    <h2 className='text-2xl font-semibold hover:underline'>
                      <a href='#'>Focus</a>
                    </h2>
                    <p className='text-[#b3b3b3]'>Music to help you concentrate</p>
                  </div>
                  <a
                    href='#'
                    className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'
                  >
                    see all
                  </a>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/6f12a2/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/b4bf15/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/ff1fff/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/111ddd/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                </div>
              </div>
              <div>
                <div className='flex justify-between items-end mb-[18px]'>
                  <div>
                    <h2 className='text-2xl font-semibold hover:underline'>
                      <a href='#'>Lorem ipsum dolor sit </a>
                    </h2>
                  </div>
                  <a
                    href='#'
                    className='uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6'
                  >
                    see all
                  </a>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/ffd111/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/dfdfdf/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/2d2d21/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                  <a
                    href='#'
                    className='p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group'
                  >
                    <div className='relative'>
                      <img
                        src='https://fakeimg.pl/600/4324df/fff?text=Cover&font=lobster'
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
                          stroke-width='1.5'
                          stroke='currentColor'
                          class='w-6 h-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      </buttom>
                    </div>
                    <h3 className='mt-4 mb-1 font-semibold tracking-wide capitalize'>
                      Playlist Title
                    </h3>
                    <p className='text-sm text-[#b3b3b3] line-clamp-2'>{LoremIpsum()}</p>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <a
        href='#'
        className='bg-violet-700 bg-gradient-to-r from-[#af2896] to=[#509bf5] text-white py-8 px-8 flex justify-center justify-between items-center'
      >
        <div>
          <p className='text-xs uppercase tracking-wider mb-1'>Preview of Spotify</p>
          <p className='leading-6 text-[14px] tracking-wider'>
            Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
          </p>
        </div>
        <button className='text-[#2c77d0] text-[14px] bg-white py-3 px-[48px] font-semibold rounded-full uppercase leading-5 tracking-widest hover:scale-105'>
          Sign up free
        </button>
      </a>
    </div>
  );
}

export default App;
