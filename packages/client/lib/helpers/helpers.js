/**
 * @param {{lat: number, lng: number}} args
 * @returns {{lat: number, lng: number}} normalized lat lng
 */
export const normalizeLatLng = ({ lat, lng }) => {
  if (typeof lat !== 'number' || typeof lng !== 'number') {
    throw new Error('lat and lng must be numbers');
  }
  // lat and lng should be truncated to 6 decimal places
  const truncLat = parseFloat(lat.toFixed(6));
  const truncLng = parseFloat(lng.toFixed(6));
  return { lat: truncLat, lng: truncLng };
};

/**
 * takes a lat lng object and returns a string of the form 'lat,lng'
 * @param {{lat: number, lng: number}} args
 * @returns {`${number},${number}`}
 */
export const latLngToString = ({ lat, lng }) => {
  return `${lat},${lng}`;
};
