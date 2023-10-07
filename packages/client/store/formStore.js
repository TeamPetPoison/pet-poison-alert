import { create } from 'zustand';
import { normalizeLatLng } from '../lib/helpers/helpers';

const initialState = {
  category: '',
  description: '',
  error: false,
  location: undefined, // {lat, lng}
  photos: [],
  showForm: false,
  step: 0,
  title: '',
};

export const useFormStore = create((set, get) => ({
  ...initialState,
  actions: {
    getFormData: () => {
      const { category, description, location, photos, title } = get();
      return {
        category: category,
        description: description,
        id: Date.now(),
        location: location,
        photos: photos,
        title: title,
      };
    },
    resetForm: () => set(initialState),
    setCategory: (str) => set({ category: str }),
    setDescription: (str) => set({ description: str }),
    setError: (bool) => set({ error: bool }),
    setLocation: ({ lat, lng }) => {
      set({ location: normalizeLatLng({ lat, lng }) });
    },
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
