import { useState } from 'react';
import BottomNavItem from './BottomNavItem.jsx';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PlusCircleIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import useFormStore from '@/store/formStore.js';

const BottomNav = () => {
  const [active, setActive] = useState(0);
  const { setShowForm } = useFormStore();

  return (
    <div className="absolute bottom-0 z-[9999] w-full h-16 text-foreground/30 rounded-t-2xl p-1 grid grid-cols-5 justify-items-center items-center bg-white">
      <BottomNavItem
        setActive={() => setActive(0)}
        selected={active === 0 ? true : false}
        name={'Home'}
      >
        <HomeIcon className="h-6 w-6 pointer-events-none" />
      </BottomNavItem>
      <BottomNavItem
        setActive={() => setActive(1)}
        selected={active === 1 ? true : false}
        name={'Search'}
      >
        <MagnifyingGlassIcon className="h-6 w-6 pointer-events-none" />
      </BottomNavItem>
      <div></div>
      <div
        onClick={() => setShowForm(true)}
        className="rounded-full fixed bottom-0 h-24 w-24 flex items-center justify-center bg-white"
      >
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-primary ">
          <button className="rounded-full h-16 w-16 flex items-center justify-center bg-backgroundAlt">
            <PlusCircleIcon className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
      <BottomNavItem
        setActive={() => setActive(2)}
        selected={active === 2 ? true : false}
        name={'Layers'}
      >
        <MapPinIcon className="h-6 w-6 pointer-events-none" />
      </BottomNavItem>
      <BottomNavItem
        setActive={() => setActive(3)}
        selected={active === 3 ? true : false}
        name={'Profile'}
      >
        <UserIcon className="h-6 w-6 pointer-events-none" />
      </BottomNavItem>
    </div>
  );
};

export default BottomNav;
