import useFormStore from '../../../../store/formStore';
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
    if (!e.target.form.checkValidity()) {
      setError(true);
    } else {
      setStep(step + 1);
      setError(false);
    }
  };

  return (
    <div className="flex flex-col w-11/12 self-center mx-8 my-2">
      <div className="flex flex-col items-center mb-2">
        <SVGIcon name="noSymbolIcon" className="text-negative" />
        <h3 className="text-negative text-xs">
          Avoid personal information and vehicle plate numbers
        </h3>
        {step === 4 ? (
          <h3 className="text-negative text-xs">
            Submissions will be made public
          </h3>
        ) : null}
      </div>
      <div className="flex justify-between">
        {step === 0 ? (
          <button
            onClick={handleCancel}
            className="flex items-center justify-center bg-negative text-background text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
          >
            Cancel
            <SVGIcon name="arrowUturnLeftIcon" className="pl-1" />
          </button>
        ) : null}
        {step > 0 ? (
          <button
            className="flex items-center justify-center bg-background text-foreground text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
            onClick={() => setStep(step - 1)}
          >
            Back
            <SVGIcon name="arrowUturnLeftIcon" className="pl-1" />
          </button>
        ) : null}
        {step < 4 ? (
          <button
            className="flex items-center justify-center bg-background text-foreground text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
            type="button"
            onClick={onNextStep}
          >
            Continue
            <SVGIcon name="arrowUturnRightIcon" className="pl-1" />
          </button>
        ) : (
          <SubmitReportForm />
        )}
      </div>
    </div>
  );
};

export default FormButtons;
