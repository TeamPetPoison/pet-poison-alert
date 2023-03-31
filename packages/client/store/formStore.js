import { create } from 'zustand';

const useFormStore = create((set) => ({
  step: 0,
  showForm: false,
  photos: [],
  title: '',
  description: '',
  location: { lat: -8.7445, lng: 115.182 },
  setPhotos: (array) => set(() => ({ photos: array })),
  setTitle: (str) => set(() => ({ title: str })),
  setDescription: (str) => set(() => ({ description: str })),
  setLocation: (latLng) => set(() => ({ location: latLng })),
  setShowForm: (bool) => set(() => ({ showForm: bool })),
  setStep: (num) => set(() => ({ step: num}))
}));

export default useFormStore;
