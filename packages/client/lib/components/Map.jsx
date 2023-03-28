import { useEffect } from 'react';
import useStore from '../../store/store';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const Map = () => {
  const geoData = useStore((state) => state.geoData);

  const SetViewOnUserLocation = () => {
    const map = useMap();

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setView(
          { lat: position.coords.latitude, lng: position.coords.longitude },
          12
        );
      });
    }, [map]);

    return null;
  };

  return (
    <MapContainer center={geoData} zoom={12} className="min-h-screen w-full">
      <SetViewOnUserLocation />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
