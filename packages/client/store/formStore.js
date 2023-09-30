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

export const useFormStore = create((set, get) => ({
  ...initialState,
  category: '',
  description: '',
  error: false,
  location: { lat: -8.7445, lng: 115.182 },
  photos: [],
  showForm: false,
  step: 0,
  title: '',
  actions: {
    resetForm: () => set(initialState),
    getFormData: () => {
      const { category, description, location, photos, title } = get();
      return {
        id: Date.now(),
        category: category,
        photos: photos,
        title: title,
        description: description,
        location: location,
      };
    },
    setCategory: (str) => set({ category: str }),
    setDescription: (str) => set({ description: str }),
    setError: (bool) => set({ error: bool }),
    setLocation: (latLng) => set({ location: latLng }),
    setPhotos: (array) => set({ photos: array }),
    setShowForm: (bool) => set({ showForm: bool }),
    setStep: (num) => set({ step: num }),
    setTitle: (str) => set({ title: str }),
  },
}));

/**
 * state updater funcs for the main zustand store
 */
export const useFormStoreActions = () => useFormStore((state) => state.actions);
