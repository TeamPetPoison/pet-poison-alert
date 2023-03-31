import useFormStore from '@/store/formStore';

const Submit = () => {
  const { setShowForm } = useFormStore();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setShowForm(false);
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-8 right-8"
    >
      Submit
    </button>
  );
};

export default Submit;
