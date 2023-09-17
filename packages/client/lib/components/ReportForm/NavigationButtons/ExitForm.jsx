import { XMarkIcon } from '@heroicons/react/24/outline';
import useFormStore from '../../../../store/formStore';

const ExitForm = () => {
  const setShowForm = useFormStore((state) => state.setShowForm);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setShowForm(false);
      }}
      className="flex z-[9999] absolute top-2 right-2"
    >
      <XMarkIcon className="h-8 w-8 stroke-2 text-foreground" />
    </button>
  );
};

export default ExitForm;
