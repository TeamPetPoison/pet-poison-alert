import useFormStore from '@/store/formStore';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

const CancelButton = () => {
  const resetForm = useFormStore((state) => state.resetForm);
  const setShowForm = useFormStore((state) => state.setShowForm);

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  return (
    <button
      onClick={handleCancel}
      className="flex items-center justify-center bg-negative text-white text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
    >
      Cancel
      <ArrowUturnLeftIcon className="h-6 w-6 pl-1" />
    </button>
  );
};

export default CancelButton;
