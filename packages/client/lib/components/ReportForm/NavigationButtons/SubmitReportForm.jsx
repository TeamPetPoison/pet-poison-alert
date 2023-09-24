import useFormStore from '../../../../store/formStore';
import { useMainStoreActions } from '../../../../store/store';
import { Button } from '../../common/Button';

const SubmitReportForm = () => {
  const { setMarkers } = useMainStoreActions();
  const getFormData = useFormStore((state) => state.getFormData);
  const resetForm = useFormStore((state) => state.resetForm);
  const setShowForm = useFormStore((state) => state.setShowForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = getFormData();
    setMarkers(formObj);
    setShowForm(false);
    resetForm();
  };

  return (
    <Button
      handleClick={handleSubmit}
      iconName="checkIcon"
      buttonType="positive"
      type="submit"
    >
      Submit
    </Button>
  );
};

export default SubmitReportForm;
