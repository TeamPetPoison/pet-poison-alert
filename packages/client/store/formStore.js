import { create } from 'zustand';

const useFormStore = create((set) => ({
  photos: [],
  title: '',
  description: '',
  location: {},
  setPhotos: (array) => set(() => ({photos: array})),
  setTitle: (str) => set(() => ({title: str})),
  setDescription: (str) => set(() => ({description: str})),
  setLocation: (latLng) => set(() => ({location: latLng}))
}));

export default useFormStore;
