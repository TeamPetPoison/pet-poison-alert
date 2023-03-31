import useFormStore from '@/store/formStore';
import { MapPinIcon } from '@heroicons/react/24/outline';

const LocationView = () => {
  const { location, setLocation, step, setStep } = useFormStore();

  return (
    <div>
      <h2 className="text-lg mt-4">Pin map location</h2>
      <div>
        <label htmlFor="location" className="block mb-2 text-black">
          e.g. "Example Road, City" or "-8.54, 115.24"
        </label>
        <input
          type="text"
          id="location"
          // placeholder need to setLocation with LatLng object
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          value={`${location.lat}, ${location.lng}`}
          placeholder="Provide a location or coordinates"
          className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
        <div className="flex justify-center mt-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
            className="flex items-center bg-primary hover:primary-700 text-white font-bold py-2.5 px-3.5 rounded-xl"
          >
            <MapPinIcon className="w-7 h-7 pr-1 text-white" />
            Update Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
