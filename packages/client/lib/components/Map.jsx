import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} className="h-1 w-full bg-red-50">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
