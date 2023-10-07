//@ts-check
import { create } from 'zustand';
import { normalizeLatLng } from '../lib/helpers/helpers.js';

const initialState = {
  geoData: { lat: -8.7445, lng: 115.182 },
  markers: [],
  rootDimensions: {
    height: 0,
  },
  width: 0,
  windowDimensions: {
    height: 0,
    width: 0,
  },
};

/**
 * main global zustand store
 * - stores the state
 */
const useMainStore = create((set) => ({
  ...initialState,
  actions: {
    setGeoData: ({ lat, lng }) => {
      set({ geoData: normalizeLatLng({ lat, lng }) });
    },
    setMarkers: (object) =>
      set((state) => ({ markers: [...state.markers, object] })),
    setRootDimensions: ({ height, width }) =>
      set({ rootDimensions: { height, width } }),
    setWindowDimensions: ({ height, width }) =>
      set({ windowDimensions: { height, width } }),
  },
}));

/**
 * state updater funcs for the main zustand store
 */
export const useMainStoreActions = () => useMainStore((state) => state.actions);

export default useMainStore;
