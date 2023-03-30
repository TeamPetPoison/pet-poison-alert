import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import Leaflet from 'leaflet';
import { PlusIcon, FaceSmileIcon } from '@heroicons/react/24/solid';

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });

  useEffect(() => {
    (async function init() {
      // delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer center={geoData} zoom={12} style={{ height: '100vh', width: '100%' }} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={geoData} draggable />
      <ZoomControl position="topright" />
    </MapContainer>
  );
};

export default Map;
