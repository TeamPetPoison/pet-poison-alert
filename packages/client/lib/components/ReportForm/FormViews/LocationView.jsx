import { latLngToString } from '@/lib/helpers/helpers';
import useMainStore from '@/store/store';
import { useFormStore, useFormStoreActions } from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

const LocationView = () => {
  const { setStep } = useFormStoreActions();
  const geoData = useMainStore((state) => state.geoData);
  const location = useFormStore((state) => state.location);

  const handleClick = () => {
    setStep(5); // this is the step where the map is shown
  };

  // use the location from the form if it exists, otherwise use the geolocation data
  const locationCoordinates = latLngToString(location ?? geoData);

  return (
    <div className="flex-1">
      <h2 className="mt-4 text-xl">Pin map location</h2>
      <div>
        <label htmlFor="location" className="text-foreground mb-2 block">
          e.g. {'"'}Example Road, City{'"'} or {'"'}-8.54, 115.24{'"'}
        </label>
        <input
          className="text-foreground border-border bg-background focus:ring-primary focus:border-primary block w-full rounded-lg border p-2 shadow-md"
          disabled
          id="location"
          name="location"
          placeholder="Provide a location or coordinates"
          type="text"
          value={locationCoordinates}
        />
        <div className="mt-20 flex justify-center">
          <button
            className="bg-primary text-background flex items-center rounded-xl px-3.5 py-2.5 font-bold"
            onClick={handleClick}
            type="button"
          >
            <SVGIcon
              name="mapPinIcon"
              className="text-background h-7 w-7 pr-1"
            />
            Update Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
