import { useEffect, useState } from 'react';
import useStore from '../../store/store';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  // const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });
  const geoData = useStore((state) => state.geoData);
  const setGeoData = useStore(state => state.setGeoData)

  const center = [geoData.lat, geoData.lng];

  useEffect(() => {
    let currentLocation = {lat: 0, lng: 0};
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation.lat = position.coords.latitude
      currentLocation.lng = position.coords.longitude
    });
    setGeoData(currentLocation)
  }, []);

  return (
    <MapContainer center={center} zoom={12} className="min-h-screen w-full">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
