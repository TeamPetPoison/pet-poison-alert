import useFormStore from '@/store/formStore';
import Continue from './Continue';
import CancelButton from './Cancel';
import GoBack from './GoBack';
import Submit from './Submit';

const FormButtons = () => {
  const { step, setStep } = useFormStore();

  return (
    <div className="flex row justify-between">
      {step === 0 ? <CancelButton /> : null}
      {step > 0 ? (
        <GoBack
          prevStep={(e) => {
            e.preventDefault();
            setStep(step - 1);
          }}
        />
      ) : null}
      {step < 2 ? (
        <Continue
          nextStep={(e) => {
            e.preventDefault();
            setStep(step + 1);
          }}
        />
      ) : (
        <Submit />
      )}
    </div>
  );
};

export default FormButtons;
