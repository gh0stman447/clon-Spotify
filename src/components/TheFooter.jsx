import React from 'react';

export const TheFooter = () => {
  return (
    <footer className='mt-auto pl-8 pb-8'>
      <ul className='flex flex-col gap-2'>
        <li>
          <a href='/' className='text-[11px] hover:underline py-2'>
            Cookies
          </a>
        </li>
        <li>
          <a href='/' className='text-[11px] hover:underline py-2'>
            Privacy
          </a>
        </li>
      </ul>
    </footer>
  );
};
