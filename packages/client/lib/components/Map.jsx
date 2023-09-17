import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';
import useFormStore from '../../store/formStore';
import useMainStore from '../../store/store';

const SetViewOnUserLocation = () => {
  const geoData = useMainStore((state) => state.geoData);
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
    if (!map || geoData.lat == null || geoData.lng == null) return;
    map.setView(geoData, 12);
  }, [geoData, map]);

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
  const geoData = useMainStore((state) => state.geoData);
  const markers = useMainStore((state) => state.markers);

  return (
    <MapContainer
      center={geoData}
      zoom={12}
      zoomControl={false}
      className="min-h-screen w-full"
    >
      <SetViewOnUserLocation />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.length > 0 &&
        markers.map((marker) => (
          <Marker key={marker.id} position={marker.location} />
        ))}
      <ZoomControl position="topright" />
    </MapContainer>
  );
};

export default Map;
