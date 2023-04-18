import useFormStore from '@/store/formStore';
import { NoSymbolIcon } from '@heroicons/react/24/outline';
import Continue from './Continue';
import CancelButton from './Cancel';
import GoBack from './GoBack';
import Submit from './Submit';

const FormButtons = () => {
  const { step, setStep, error, setError } = useFormStore();
  // useState for error state here. If error in nextStep pass error state into whichever View

  return (
    <div className="flex flex-col w-11/12 self-center mx-8 my-2">
      <div className='flex flex-col items-center mb-2'>
        <NoSymbolIcon className='text-negative h-6 w-6'/>
        <h3 className='text-negative text-xs whitespace-nowrap'>Avoid personal information and vehicle plate numbers</h3>
        {step === 4 ? <h3 className='text-negative text-xs whitespace-nowrap'>Submissions will be made public</h3> : null}
      </div>
      <div className='flex justify-between'>
        {step === 0 ? <CancelButton /> : null}
        {step > 0 ? (
          <GoBack
            prevStep={(e) => {
              e.preventDefault();
              setStep(step - 1);
            }}
          />
        ) : null}
        {step < 4 ? (
          <Continue
            nextStep={(e) => {
              if (!e.target.form.checkValidity()) {
                e.preventDefault()
                setError(!e.target.form.checkValidity())
                return;
              }
              e.preventDefault();
              setStep(step + 1);
            }}
          />
        ) : (
          <Submit />
        )}
      </div>
    </div>
  );
};

export default FormButtons;
