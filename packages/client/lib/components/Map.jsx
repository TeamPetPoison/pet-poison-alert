import { useEffect, useRef } from 'react';
import useStore from '../../store/store';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import Leaflet from 'leaflet';
import useFormStore from '@/store/formStore';

const SetViewOnUserLocation = () => {
  const setLocation = useFormStore((state) => state.setLocation);
  const isMounted = useRef(false);
  const map = useMap();

  useEffect(() => {
    (async function init() {
      // TODO: delete override required on prototype required or not?
      // delete Leaflet.Icon.Default.prototype._getIconUrl;

      // Sets default icon path for leaflet icons/markers
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();

    // Checks if map is currently mounted (prevents position error when form is opened)
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!map) return;

        if (isMounted.current) {
          map.setView(
            { lat: position.coords.latitude, lng: position.coords.longitude },
            12
          );
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: Infinity }
    );
  }, [map, setLocation]);

  return null;
};

const Map = () => {
  const geoData = useStore((state) => state.geoData);
  const markers = useStore((state) => state.markers);

  return (
    <MapContainer
      center={geoData}
      zoom={12}
      zoomControl={false}
      className="min-h-screen w-full"
    >
      <SetViewOnUserLocation />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.length > 0 &&
        markers.map((marker, index) => {
          return <Marker key={index} position={marker.location} />;
        })}
      <ZoomControl position="topright" />
    </MapContainer>
  );
};

export default Map;
