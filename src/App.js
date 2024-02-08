import { TheSideBar } from './components/TheSideBar';
import { TheHeader } from './components/TheHeader';
import { TheMain } from './components/TheMain';
import { TheRegistration } from './components/TheRegistration';
import { TheSideBarOverlay } from './components/TheSideBarOverlay';

function App() {
  return (
    <>
      <div className='flex overflow-auto flex-grow'>
        <TheSideBar />
        <TheSideBarOverlay />
        <div className='flex-1 overflow-auto'>
          <TheHeader />
          <TheMain />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;
