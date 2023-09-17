import { NoSymbolIcon } from '@heroicons/react/24/outline';
import useFormStore from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';
import CancelButton from './Cancel';
import Continue from './Continue';
import Submit from './Submit';

const FormButtons = () => {
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const setError = useFormStore((state) => state.setError);

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
        <NoSymbolIcon className="text-negative h-6 w-6" />
        <h3 className="text-negative text-xs backgroundspace-nowrap">
          Avoid personal information and vehicle plate numbers
        </h3>
        {step === 4 ? (
          <h3 className="text-negative text-xs backgroundspace-nowrap">
            Submissions will be made public
          </h3>
        ) : null}
      </div>
      <div className="flex justify-between">
        {step === 0 ? <CancelButton /> : null}
        {step > 0 ? (
          <button
            className="flex items-center justify-center bg-background text-foreground text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
            onClick={() => setStep(step - 1)}
          >
            Back
            <SVGIcon name="arrowUturnLeftIcon" className="h-6 w-6 pl-1" />
          </button>
        ) : null}
        {step < 4 ? <Continue nextStep={onNextStep} /> : <Submit />}
      </div>
    </div>
  );
};

export default FormButtons;
