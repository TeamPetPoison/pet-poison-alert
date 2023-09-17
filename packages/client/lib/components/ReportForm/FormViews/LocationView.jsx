import useFormStore from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

const LocationView = () => {
  const location = useFormStore((state) => state.location);
  const setLocation = useFormStore((state) => state.setLocation);
  const setStep = useFormStore((state) => state.setStep);

  return (
    <div className="flex-1">
      <h2 className="mt-4 text-xl">Pin map location</h2>
      <div>
        <label htmlFor="location" className="text-foreground mb-2 block">
          e.g. {'"'}Example Road, City{'"'} or {'"'}-8.54, 115.24{'"'}
        </label>
        <input
          type="text"
          id="location"
          disabled
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          value={`${location.lat}, ${location.lng}`}
          placeholder="Provide a location or coordinates"
          className="text-foreground border-border bg-background focus:ring-primary focus:border-primary block w-full rounded-lg border p-2 shadow-md"
        />
        <div className="mt-20 flex justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(5);
            }}
            className="bg-primary text-background flex items-center rounded-xl px-3.5 py-2.5 font-bold"
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
