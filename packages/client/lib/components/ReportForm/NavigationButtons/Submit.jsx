import useFormStore from '@/store/formStore';
import useStore from '@/store/store';
import { CheckIcon } from '@heroicons/react/24/outline';

const Submit = () => {
  const { setShowForm, resetForm, category, photos, title, description, location } = useFormStore();
  const { setMarkers } = useStore();

  const handleSubmit = (category, photos, title, description, location) => {
    const formObj = {
      category: category,
      photos: photos,
      title: title,
      description: description,
      location: location
    }

    setMarkers(formObj)
    resetForm()
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit(photos, title, description, location)
        setShowForm(false);
      }}
      className="flex items-center bg-positive hover:positive-700 text-white text-3xl py-2.5 px-3.5 rounded-2xl"
      >
      Submit
      <CheckIcon className="w-8 h-8 pr-1 text-white" />

    </button>
  );
};

export default Submit;
