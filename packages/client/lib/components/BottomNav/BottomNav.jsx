import { useState } from 'react';
import BottomNavItem from './BottomNavItem.jsx';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PlusCircleIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import useFormStore from '../../../store/formStore.js';

const BOTTOM_NAV_ITEMS = [
  {
    name: 'Home',
    icon: <HomeIcon className="h-6 w-6 pointer-events-none" />,
  },
  {
    name: 'Search',
    icon: <MagnifyingGlassIcon className="h-6 w-6 pointer-events-none" />,
  },
  {
    name: 'Layers',
    icon: <MapPinIcon className="h-6 w-6 pointer-events-none" />,
  },
  {
    name: 'Profile',
    icon: <UserIcon className="h-6 w-6 pointer-events-none" />,
  },
];

const LEFT_NAV_ITEMS = BOTTOM_NAV_ITEMS.slice(0, 2);
const RIGHT_NAV_ITEMS = BOTTOM_NAV_ITEMS.slice(2, 4);

const BottomNav = () => {
  const [active, setActive] = useState(0);
  const setShowForm = useFormStore((state) => state.setShowForm);

  const handleActive = (name) => {
    setActive(name);
  };

  const isActive = (name) => {
    return active === name ? true : false;
  };

  return (
    <div className="absolute bottom-0 z-[9999] w-full h-16 text-foreground/30 rounded-t-2xl p-1 grid grid-cols-5 justify-items-center items-center bg-white">
      {LEFT_NAV_ITEMS.map((item) => (
        <BottomNavItem
          key={item.name}
          setActive={() => handleActive(item.name)}
          selected={isActive(item.name)}
          name={item.name}
        >
          {item.icon}
        </BottomNavItem>
      ))}
      <div onClick={() => setShowForm(true)} className="relative">
        <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/2 rounded-full h-24 w-24 flex items-center justify-center bg-background">
          <div className="rounded-full h-20 w-20 flex items-center justify-center bg-primary ">
            <button className="rounded-full h-16 w-16 flex items-center justify-center bg-backgroundAlt">
              <PlusCircleIcon className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
      {RIGHT_NAV_ITEMS.map((item) => (
        <BottomNavItem
          key={item.name}
          setActive={() => handleActive(item.name)}
          selected={isActive(item.name)}
          name={item.name}
        >
          {item.icon}
        </BottomNavItem>
      ))}
    </div>
  );
};

export default BottomNav;
