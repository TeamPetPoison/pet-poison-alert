import { create } from 'zustand';

const useFormStore = create((set) => ({
  photos: [],
  title: '',
  description: '',
  location: {},
  setPhotos: (array) => set((state) => state.photos = array),
  setTitle: (str) => set((state) => state.title = str),
  setDescription: (str) => set((state) => state.description = str),
  setLocation: (latLng) => set((state) => state.location = latLng)
}));

export default useFormStore;
