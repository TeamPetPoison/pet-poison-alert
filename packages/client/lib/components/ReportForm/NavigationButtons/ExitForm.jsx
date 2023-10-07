import { useFormStoreActions } from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

//TODO: is this component needed?
const ExitForm = () => {
  const { setShowForm } = useFormStoreActions();

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <button
      className="absolute right-2 top-2 z-[9999] flex"
      onClick={handleCancel}
      type="button"
    >
      <SVGIcon name="xMarkIcon" className="text-foreground" />
    </button>
  );
};

export default ExitForm;
