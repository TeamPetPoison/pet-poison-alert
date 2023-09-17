import useFormStore from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

//TODO: is this component needed?
const ExitForm = () => {
  const setShowForm = useFormStore((state) => state.setShowForm);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setShowForm(false);
      }}
      className="absolute right-2 top-2 z-[9999] flex"
    >
      {/* <XMarkIcon className="h-8 w-8 stroke-2 text-foreground" /> */}
      <SVGIcon name="xMarkIcon" className="text-foreground" />
    </button>
  );
};

export default ExitForm;
