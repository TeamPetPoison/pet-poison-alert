import useFormStore from '@/store/formStore';
import useStore from '@/store/store';
import { CheckIcon } from '@heroicons/react/24/outline';

const Submit = () => {
  const { setShowForm, resetForm, category, photos, title, description, location } = useFormStore();
  const { setMarkers } = useStore();

  const handleSubmit = (category, photos, title, description, location) => {
    // add data validation and checks here to ensure good input data
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
        handleSubmit(category, photos, title, description, location)
        setShowForm(false);
      }}
      className="flex items-center justify-center bg-positive text-white text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
      >
      Submit
      <CheckIcon className="w-6 h-6 pl-1 text-white" />

    </button>
  );
};

export default Submit;
