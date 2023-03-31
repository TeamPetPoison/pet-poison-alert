import useFormStore from '@/store/formStore';
import dynamic from 'next/dynamic';
import { CheckIcon } from '@heroicons/react/24/outline';

const MapWithNoSSR = dynamic(() => import('../../Map'), {
  ssr: false,
});

const UpdateView = () => {
  const { location, setLocation, step, setStep } = useFormStore();

  return (
    <div className="flex justify-center">
      <div className='absolute top-10 w-11/12 z-[9999]'>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search"
          className="w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
      </div>
      <MapWithNoSSR markerPosition={location} />
      <div className="absolute bottom-10 z-[9999]">
        <button
          onClick={(e) => {
            e.preventDefault();
            setStep(step - 1);
            // here we will setLocation()
          }}
          className="flex items-center bg-positive hover:positive-700 text-white font-bold py-2.5 px-3.5 rounded-xl"
        >
          Confirm
          <CheckIcon className="w-7 h-7 pr-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default UpdateView;
