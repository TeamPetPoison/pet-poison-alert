import useFormStore from '@/store/formStore';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useRef, useEffect } from 'react';

const SetMarkerLocation = ({ markerRef, setLocation }) => {
  const map = useMap();

  useEffect(() => {
    const { current } = markerRef;

    if (current) {
      current.on('dragend', (e) => {
        setLocation(e.target.getLatLng());
      });
    }

    return () => {
      if (current) {
        current.off('dragend');
      }
    };
  }, [markerRef, setLocation, map]);

  return null;
};

const UpdateView = () => {
  const { location, setLocation, step, setStep } = useFormStore();
  const markerRef = useRef(null);

  return (
    <div className="flex justify-center h-screen">
      <div className="absolute top-10 w-11/12 z-[9999]">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search"
          className="w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
      </div>
      <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={false}
        className="min-h-screen w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetMarkerLocation markerRef={markerRef} setLocation={setLocation} />;
        <Marker position={location} ref={markerRef} draggable />
      </MapContainer>
      <div className="absolute bottom-10 z-[9999]">
        <button
          onClick={(e) => {
            e.preventDefault();
            setStep(3);
          }}
          className="flex items-center bg-positive hover:positive-700 text-white font-bold py-2.5 px-3.5 rounded-xl"
        >
          Confirm
          <CheckIcon className="w-6 h-6 pr-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default UpdateView;
