import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PlusCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <div className="absolute bottom-0 z-[9999] w-full h-16 rounded-t-xl p-1 flex justify-between items-end bg-white">
      <div>
        <HomeIcon className="h-8 w-8" />
        Home
      </div>
      <div>
        <MagnifyingGlassIcon className="h-8 w-8" />
        Search
      </div>
      <div>
        <PlusCircleIcon className="h-8 w-8" />
      </div>
      <div>
        <MapPinIcon className="h-8 w-8" />
        Layers
      </div>
      <div>
        <UserIcon className="h-8 w-8" />
        Profile
      </div>
    </div>
  );
};

export default BottomNav;
