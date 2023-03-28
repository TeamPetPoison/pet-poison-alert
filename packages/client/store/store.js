import { create } from "zustand";

const useStore = create(set => ({
    geoData: {lat: -8.7445, lng: 115.182},
    setGeoData: (lat, lng) => set(state => state.geoData = {})
}))

export default useStore;