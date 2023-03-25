import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: -8.7445, lng: 115.182 });

  const handleButtonClick = () => {
    setGeoData({ lat: -8.1234, lng: 116.567 });
  };

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
        <Marker position={[geoData.lat, geoData.lng]} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
