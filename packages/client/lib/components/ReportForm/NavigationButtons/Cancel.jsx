import useFormStore from '@/store/formStore';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

const CancelButton = () => {
  const { resetForm, setShowForm } = useFormStore();

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  return (
    <button
      onClick={handleCancel}
      className="flex items-center justify-center bg-negative text-white text-3xl border py-2 px-4 rounded-2xl"
    >
      Cancel
      <ArrowUturnLeftIcon className="h-8 w-8 stroke-2" />
    </button>
  );
};

export default CancelButton;