import { useFormStoreActions } from '../../../../store/formStore';
import { useMainStoreActions } from '../../../../store/store';
import { Button } from '../../common/Button';

const SubmitReportForm = () => {
  const { setMarkers } = useMainStoreActions();
  const { getFormData, resetForm, setShowForm } = useFormStoreActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = getFormData();
    setMarkers(formObj);
    setShowForm(false);
    resetForm();
  };

  return (
    <Button
      buttonType="positive"
      handleClick={handleSubmit}
      iconName="checkIcon"
      type="submit"
    >
      Submit
    </Button>
  );
};

export default SubmitReportForm;
