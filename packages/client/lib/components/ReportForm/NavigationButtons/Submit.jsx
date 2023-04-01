import useFormStore from '@/store/formStore';
import useStore from '@/store/store';

const Submit = () => {
  const { setShowForm, resetForm, photos, title, description, location } = useFormStore();
  const { setMarkers } = useStore();

  const handleSubmit = (photos, title, description, location) => {
    const formObj = {
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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-8 right-8"
    >
      Submit
    </button>
  );
};

export default Submit;
