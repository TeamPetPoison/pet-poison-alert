//@ts-check
import { create } from 'zustand';
import { normalizeLatLng } from '../lib/helpers/helpers.js';

/**
 * main global zustand store
 * - stores the state
 */
const useMainStore = create((set) => ({
  geoData: { lat: -8.7445, lng: 115.182 },
  markers: [],
  rootDimensions: { width: 0, height: 0 },
  windowDimensions: { width: 0, height: 0 },
  actions: {
    setGeoData: ({ lat, lng }) => {
      set({ geoData: normalizeLatLng({ lat, lng }) });
    },
    setMarkers: (object) =>
      set((state) => ({ markers: [...state.markers, object] })),
    setRootDimensions: ({ width, height }) =>
      set({ rootDimensions: { width, height } }),
    setWindowDimensions: ({ width, height }) =>
      set({ windowDimensions: { width, height } }),
  },
}));

/**
 * state updater funcs for the main zustand store
 */
export const useMainStoreActions = () => useMainStore((state) => state.actions);

export default useMainStore;
