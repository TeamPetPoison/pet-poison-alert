//@ts-check
import { create } from 'zustand';

const useMainStore = create((set) => ({
  geoData: { lat: -8.7445, lng: 115.182 },
  markers: [],
  setMarkers: (object) =>
    set((state) => ({ markers: [...state.markers, object] })),
  setGeoData: ({ lat, lng }) => {
    console.info('setGeoData', lat, lng);
    set({ geoData: { lat, lng } });
  },
}));

export default useMainStore;
