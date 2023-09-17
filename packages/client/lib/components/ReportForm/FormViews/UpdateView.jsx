import { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import useFormStore from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

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
  const location = useFormStore((state) => state.location);
  const setLocation = useFormStore((state) => state.setLocation);
  const setStep = useFormStore((state) => state.setStep);
  const markerRef = useRef(null);

  return (
    <div className="flex justify-center h-screen">
      <div className="absolute top-10 w-11/12 z-[9999]">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search"
          className="w-full p-2 text-foreground border border-border rounded-lg bg-background focus:ring-primary focus:border-primary shadow-md"
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
          className="flex items-center bg-positive hover:bg-positive text-background font-bold py-2.5 px-3.5 rounded-xl"
        >
          Confirm
          <SVGIcon name="checkIcon" className="pr-1 text-background" />
        </button>
      </div>
    </div>
  );
};

export default UpdateView;
