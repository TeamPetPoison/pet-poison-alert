import { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { useFormStore, useFormStoreActions } from '../../../../store/formStore';
import useMainStore from '../../../../store/store';
import LocationSearch from '../../LocationSearch';
import { SVGIcon } from '../../common/icons/SVGIcon';

const SetMarkerLocation = ({ markerRef, setLocation }) => {
  const map = useMap();

  useEffect(() => {
    const { current } = markerRef;

    if (current) {
      current.on('dragend', (e) => {
        const { lat, lng } = e.target.getLatLng();
        setLocation({ lat, lng });
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

const UpdateMapLocation = ({ location }) => {
  const map = useMap();
  map.setView(location, map.getZoom());
  return null;
};

const UpdateView = () => {
  const { setStep, setLocation } = useFormStoreActions();
  const geoData = useMainStore((state) => state.geoData);
  const location = useFormStore((state) => state.location);

  // use the location from the form if it exists, otherwise use the geolocation data
  const coordinatesLatLng = location ?? geoData;

  const markerRef = useRef(null);

  const handleConfirm = () => {
    setStep(3);
  };

  return (
    <div className="flex justify-center">
      <div className="absolute top-10 z-[9999] w-11/12">
        <LocationSearch setLocationData={setLocation} />
      </div>
      <MapContainer
        center={coordinatesLatLng}
        zoom={13}
        scrollWheelZoom={false}
        className="min-h-screen w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetMarkerLocation markerRef={markerRef} setLocation={setLocation} />;
        <Marker draggable position={coordinatesLatLng} ref={markerRef} />
        <UpdateMapLocation location={coordinatesLatLng} />
      </MapContainer>
      <div className="absolute bottom-10 z-[9999]">
        <button
          className="bg-positive hover:bg-positive text-background flex items-center rounded-xl px-3.5 py-2.5 font-bold"
          onClick={handleConfirm}
          type="button"
        >
          Confirm
          <SVGIcon name="checkIcon" className="text-background pr-1" />
        </button>
      </div>
    </div>
  );
};

export default UpdateView;
