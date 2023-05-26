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
