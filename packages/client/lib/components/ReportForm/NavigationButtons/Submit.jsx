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
      className="flex justify-between bg-white text-black text-3xl border py-2 px-4 rounded"
    >
      Submit
    </button>
  );
};

export default Submit;
