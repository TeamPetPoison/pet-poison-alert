import useFormStore from '@/store/formStore';
import Continue from './Continue';
import GoBack from './GoBack';
import Submit from './Submit';

const FormButtons = () => {
    const { step, setStep } = useFormStore()

    return (
        <div className="flex row justify-between">
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
          {step > 0 ? (
            <GoBack
              prevStep={(e) => {
                e.preventDefault();
                setStep(step - 1);
              }}
            />
          ) : null}
        </div>
    )
}

export default FormButtons;