import useFormStore from '@/store/formStore';
import { MapPinIcon } from '@heroicons/react/24/outline';

const LocationView = () => {
  const location = useFormStore((state) => state.location);
  const setLocation = useFormStore((state) => state.setLocation);
  const setStep = useFormStore((state) => state.setStep);

  return (
    <div className="flex-1">
      <h2 className="text-xl mt-4">Pin map location</h2>
      <div>
        <label htmlFor="location" className="block mb-2 text-foreground">
          e.g. "Example Road, City" or "-8.54, 115.24"
        </label>
        <input
          type="text"
          id="location"
          disabled
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          value={`${location.lat}, ${location.lng}`}
          placeholder="Provide a location or coordinates"
          className="block w-full p-2 text-foreground border border-gray-300 rounded-lg bg-background focus:ring-primary focus:border-primary shadow-md"
        />
        <div className="flex justify-center mt-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(5);
            }}
            className="flex items-center bg-primary text-background font-bold py-2.5 px-3.5 rounded-xl"
          >
            <MapPinIcon className="w-7 h-7 pr-1 text-background" />
            Update Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
