import { useState } from 'react';
import useFormStore from '../../../store/formStore.js';
import { SVGIcon } from '../common/icons/SVGIcon.jsx';
import BottomNavItem from './BottomNavItem.jsx';

const BOTTOM_NAV_ITEMS = [
  {
    name: 'Home',
    icon: <SVGIcon name="homeIcon" />,
  },
  {
    name: 'Search',
    icon: <SVGIcon name="magnifyingGlassIcon" />,
  },
  {
    name: 'Layers',
    icon: <SVGIcon name="mapPinIcon" />,
  },
  {
    name: 'Profile',
    icon: <SVGIcon name="userIcon" />,
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
    <div className="text-foreground bg-background absolute bottom-0 z-[9999] grid h-16 w-full grid-cols-5 items-center justify-items-center rounded-t-2xl p-1">
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
        <div className="bg-background absolute bottom-0 left-0 flex h-24 w-24 -translate-x-1/2 translate-y-1/3 items-center justify-center rounded-full">
          <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full ">
            <button className="bg-backgroundAlt flex h-16 w-16 items-center justify-center rounded-full">
              <SVGIcon name="plusCircleIcon" className="text-primary" />
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
