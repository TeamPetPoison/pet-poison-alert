import { create } from "zustand";

const useStore = create(set => ({
    geoData: [-8.7445, 115.182],
    setGeoData: (lat, lng) => set(state => state.geoData = [lat, lng])
}))

export default useStore;