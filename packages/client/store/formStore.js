import { create } from 'zustand';

const initialState = {
  step: 0,
  showForm: false,
  photos: [],
  title: '',
  description: '',
  location: { lat: -8.7445, lng: 115.182 }
}

const useFormStore = create((set) => ({
  ...initialState,
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
  setStep: (num) => set(() => ({ step: num })),
  resetForm: () => set(initialState)
}));

export default useFormStore;
