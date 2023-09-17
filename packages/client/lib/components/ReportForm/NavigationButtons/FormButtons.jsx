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
    <div className="mx-8 my-2 flex w-11/12 flex-col self-center">
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
      <div className="flex justify-between">
        {step === 0 ? (
          <button
            onClick={handleCancel}
            className="bg-negative text-background m-1 flex w-1/2 items-center justify-center rounded-2xl border py-1.5 text-xl"
          >
            Cancel
            <SVGIcon name="arrowUturnLeftIcon" className="pl-1" />
          </button>
        ) : null}
        {step > 0 ? (
          <button
            className="bg-background text-foreground m-1 flex w-1/2 items-center justify-center rounded-2xl border py-1.5 text-xl"
            onClick={() => setStep(step - 1)}
            type="button"
          >
            Back
            <SVGIcon name="arrowUturnLeftIcon" className="pl-1" />
          </button>
        ) : null}
        {step < 4 ? (
          <button
            className="bg-background text-foreground m-1 flex w-1/2 items-center justify-center rounded-2xl border py-1.5 text-xl"
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
