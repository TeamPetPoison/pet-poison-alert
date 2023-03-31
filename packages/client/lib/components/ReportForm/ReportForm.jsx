import { useState } from 'react';
import LocationView from './FormViews/LocationView';
import PhotoView from './FormViews/PhotoView';
import SummaryView from './FormViews/SummaryView';
import Continue from './NavigationButtons/Continue';
import GoBack from './NavigationButtons/GoBack';
import Submit from './NavigationButtons/Submit';

const ReportForm = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="h-100 w-100 bg-white p-2">
      <h1 className="text-xl font-medium">Report your incident</h1>
      <form action="">
        {step === 0 ? <PhotoView /> : null}
        {step === 1 ? <SummaryView /> : null}
        {step === 2 ? <LocationView /> : null}
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
      </form>
    </div>
  );
};

export default ReportForm;
