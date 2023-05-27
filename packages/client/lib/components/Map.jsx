import { useEffect } from 'react';
import useStore from '../../store/store';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, ZoomControl,useMap } from 'react-leaflet';
import Leaflet from 'leaflet';

const SetViewOnUserLocation = () => {
  const map = useMap();

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        map.setView(
          { lat: position.coords.latitude, lng: position.coords.longitude },
          12
        );
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: Infinity }
    );
  }, [map]);

  return null;
};

const Map = () => {
  const geoData = useStore((state) => state.geoData);

  return (
    <MapContainer center={geoData} zoom={12} zoomControl={false} className="min-h-screen w-full">
      <SetViewOnUserLocation />
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
