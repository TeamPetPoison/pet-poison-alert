import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import Leaflet from 'leaflet';
import { PlusIcon, FaceSmileIcon } from '@heroicons/react/24/solid';

function Map() {
  const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });

  // const center = L.latLng(geoData.lat, geoData.lng);

  // const locationIconMarkup = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  //   <path d="M10 0c-5.514 0-10 4.486-10 10 0 7.5 10 20 10 20s10-12.5 10-20c0-5.514-4.486-10-10-10zm0 14c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
  // </svg>`;

  // const locationIconUrl = encodeURI(
  //   "data:image/svg+xml;charset=utf-8," + locationIconMarkup
  // );

  // const locationIconSvg = new L.Icon({
  //   iconUrl: locationIconUrl,
  //   iconSize: [30, 30],
  // });
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
}

export default Map;
