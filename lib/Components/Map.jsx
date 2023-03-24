import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });

  const handleButtonClick = () => {
    setGeoData({ lat: -8.1234, lng: 116.567 });
  };

  const locationIconMarkup = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 0c-5.514 0-10 4.486-10 10 0 7.5 10 20 10 20s10-12.5 10-20c0-5.514-4.486-10-10-10zm0 14c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
  </svg>`;
  const locationIconUrl = encodeURI(
    "data:image/svg+xml;charset=utf-8," + locationIconMarkup
  );
  const locationIconSvg = new L.Icon({
    iconUrl: locationIconUrl,
    iconSize: [30, 30],
  });

  return (
    <div>
      <button onClick={handleButtonClick}>Update GeoData</button>
      <MapContainer
        center={[geoData.lat, geoData.lng]}
        zoom={12}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[geoData.lat, geoData.lng]} icon={locationIconSvg} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
