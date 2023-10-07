import { normalizeLatLng } from '@/lib/helpers/helpers';
import { create } from 'zustand';

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
