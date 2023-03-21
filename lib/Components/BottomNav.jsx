import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PlusCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <div className="absolute bottom-0 z-[9999] w-full h-16 text-slate-400 rounded-t-2xl p-1 grid grid-cols-5 justify-items-center items-center bg-white">
      <div className="flex items-center justify-center flex-col">
        <HomeIcon className="h-6 w-6" />
        <div>Home</div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <div>Search</div>
      </div>
      <div></div>
      <div className="rounded-full fixed bottom-0 h-24 w-24 flex items-center justify-center bg-white">
        <div className="rounded-full h-20 w-20 flex items-center justify-center bg-purple-500 ">
          <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-300">
            <PlusCircleIcon className="h-6 w-6 text-purple-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <MapPinIcon className="h-6 w-6" />
        <div>Layers</div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <UserIcon className="h-6 w-6" />
        <div>Profile</div>
      </div>
    </div>
  );
};

export default BottomNav;
