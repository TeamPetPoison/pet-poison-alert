import useFormStore from '@/store/formStore';
import useStore from '@/store/store';
import { CheckIcon } from '@heroicons/react/24/outline';

const Submit = () => {
  const setShowForm = useFormStore((state) => state.setShowForm);
  const resetForm = useFormStore((state) => state.resetForm);
  const category = useFormStore((state) => state.category);
  const photos = useFormStore((state) => state.photos);
  const title = useFormStore((state) => state.title);
  const description = useFormStore((state) => state.description);
  const location = useFormStore((state) => state.location);
  const setMarkers = useStore((state) => state.setMarkers);

  const handleSubmit = (category, photos, title, description, location) => {
    const formObj = {
      category: category,
      photos: photos,
      title: title,
      description: description,
      location: location,
    };

    setMarkers(formObj);
    resetForm();
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit(category, photos, title, description, location);
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
