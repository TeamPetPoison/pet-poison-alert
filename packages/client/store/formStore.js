import { create } from 'zustand';

const initialState = {
  category: '',
  description: '',
  error: false,
  location: { lat: -8.7445, lng: 115.182 },
  photos: [],
  showForm: false,
  step: 0,
  title: '',
};

const useFormStore = create((set) => ({
  ...initialState,
  category: '',
  description: '',
  error: false,
  location: { lat: -8.7445, lng: 115.182 },
  photos: [],
  resetForm: () => set(initialState),
  setCategory: (str) => set(() => ({ category: str })),
  setDescription: (str) => set(() => ({ description: str })),
  setError: (bool) => set(() => ({ error: bool })),
  setLocation: (latLng) => set(() => ({ location: latLng })),
  setPhotos: (array) => set(() => ({ photos: array })),
  setShowForm: (bool) => set(() => ({ showForm: bool })),
  setStep: (num) => set(() => ({ step: num })),
  setTitle: (str) => set(() => ({ title: str })),
  showForm: false,
  step: 0,
  title: '',
}));

export default useFormStore;
