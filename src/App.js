import { TheSideBar } from './components/TheSideBar';
import { TheHeader } from './components/TheHeader';
import { TheMain } from './components/TheMain';
import { TheRegistration } from './components/TheRegistration';
import { TheSideBarOverlay } from './components/TheSideBarOverlay';
import { useEffect, useRef } from 'react';

function App() {
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;
    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  });

  return (
    <>
      <div className='flex overflow-auto flex-grow'>
        <TheSideBar />
        <TheSideBarOverlay />
        <div className='flex-1 overflow-auto' ref={contentWrapperRef}>
          <TheHeader />
          <TheMain toggleScrolling={toggleScrolling} />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;
