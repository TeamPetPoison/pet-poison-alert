import useFormStore from '../../../../store/formStore';
import { Button } from '../../common/Button';
import { SVGIcon } from '../../common/icons/SVGIcon';
import SubmitReportForm from './SubmitReportForm.jsx';

const FormButtons = () => {
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const setError = useFormStore((state) => state.setError);

  const resetForm = useFormStore((state) => state.resetForm);
  const setShowForm = useFormStore((state) => state.setShowForm);

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  const onNextStep = (e) => {
    e.preventDefault();
    if (!e.target?.form?.checkValidity()) {
      setError(true);
    } else {
      setStep(step + 1);
      setError(false);
    }
  };

  // If we are on the first step, we want to cancel the form
  // If we are on any other step, we want to go back one step
  const handleBackClick = () => {
    return step === 0 ? handleCancel : () => setStep(step - 1);
  };

  return (
    <div className="bg-background sticky bottom-0 left-0 flex w-full flex-col items-center justify-end pb-4 pt-2">
      <div className="text-negative mb-2 flex flex-col items-center pt-2 text-center text-xs">
        <SVGIcon name="noSymbolIcon" />
        <h3 className="w-full whitespace-nowrap">
          Avoid personal information and vehicle plate numbers
        </h3>
        {step === 4 ? (
          <h3 className="w-full whitespace-nowrap">
            Submissions will be made public
          </h3>
        ) : null}
      </div>
      <div className="flex w-full max-w-xs items-center justify-center gap-x-2">
        <BackOrExitButton handleClick={handleBackClick} step={step} />
        {step < 4 ? (
          <Button
            buttonType="neutral"
            handleClick={onNextStep}
            iconName="arrowUturnRightIcon"
          >
            Continue
          </Button>
        ) : (
          <SubmitReportForm />
        )}
      </div>
    </div>
  );
};

export default FormButtons;

const BackOrExitButton = ({ handleClick, step }) => {
  return (
    <Button
      buttonType={step === 0 ? 'negative' : 'neutral'}
      handleClick={handleClick()}
      iconName="arrowUturnLeftIcon"
    >
      {step === 0 ? 'Cancel' : 'Back'}
    </Button>
  );
};
