import Logo from './assets/Logo2.svg';

function App() {
  return (
    <div className='flex items-start'>
      <aside className='bg-black w-[256px] h-screen text-[#b2b2b2] flex flex-col sticky top-0'>
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
        <header className='bg-[#070707] flex flex-1 py-3 px-8 justify-between sticky top-0'>
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
        <main></main>
      </div>
    </div>
  );
}

export default App;
