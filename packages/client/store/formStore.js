import { create } from 'zustand';

const initialState = {
  step: 0,
  error: false,
  showForm: false,
  category: '',
  photos: [],
  title: '',
  description: '',
  location: { lat: -8.7445, lng: 115.182 },
};

const useFormStore = create((set) => ({
  ...initialState,
  step: 0,
  error: false,
  showForm: false,
  category: '',
  photos: [],
  title: '',
  description: '',
  location: { lat: -8.7445, lng: 115.182 },
  setCategory: (str) => set(() => ({ category: str })),
  setPhotos: (array) => set(() => ({ photos: array })),
  setTitle: (str) => set(() => ({ title: str })),
  setDescription: (str) => set(() => ({ description: str })),
  setLocation: (latLng) => set(() => ({ location: latLng })),
  setShowForm: (bool) => set(() => ({ showForm: bool })),
  setStep: (num) => set(() => ({ step: num })),
  setError: (bool) => set(() => ({ error: bool })),
  resetForm: () => set(initialState),
}));

export default useFormStore;
