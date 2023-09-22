//@ts-check
import { create } from 'zustand';

/**
 * main global zustand store
 * - stores the state
 * - actions separated into the `useMainStoreActions` object
 */
const useMainStore = create(() => ({
  geoData: { lat: -8.7445, lng: 115.182 },
  markers: [],
  rootDimensions: { width: 0, height: 0 },
  windowDimensions: { width: 0, height: 0 },
}));

/**
 * state updater funcs for the main zustand store
 */
export const useMainStoreActions = () => ({
  setGeoData: ({ lat, lng }) => {
    console.info('setGeoData', lat, lng);
    useMainStore.setState({ geoData: { lat, lng } });
  },
  setMarkers: (object) =>
    useMainStore.setState((state) => ({ markers: [...state.markers, object] })),
  setRootDimensions: ({ width, height }) =>
    useMainStore.setState({ rootDimensions: { width, height } }),
  setWindowDimensions: ({ width, height }) =>
    useMainStore.setState({ windowDimensions: { width, height } }),
});

export default useMainStore;
