import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: null,
    lng: null,
  });
  const setLocation = (location) => {
    setSelectedLocation(location);
  };
  return (
    <LocationContext.Provider
      value={{ selectedLocation, setSelectedLocation, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
export const useLocationContext = () => useContext(LocationContext);
export default LocationContext;
