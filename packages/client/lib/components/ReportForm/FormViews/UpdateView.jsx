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
    <div className="flex min-h-screen justify-center">
      <div className="absolute top-10 z-[9999] w-11/12">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search"
          className="text-foreground border-border bg-background focus:ring-primary focus:border-primary w-full rounded-lg border p-2 shadow-md"
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
          className="bg-positive hover:bg-positive text-background flex items-center rounded-xl px-3.5 py-2.5 font-bold"
        >
          Confirm
          <SVGIcon name="checkIcon" className="text-background pr-1" />
        </button>
      </div>
    </div>
  );
};

export default UpdateView;
