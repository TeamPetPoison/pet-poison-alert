import dynamic from 'next/dynamic';
import LocationView from './FormViews/LocationView';
import PhotoView from './FormViews/PhotoView';
import SummaryView from './FormViews/SummaryView';
import FormButtons from './NavigationButtons/FormButtons';
import CategoryView from './FormViews/CategoryView';
import ExitForm from './NavigationButtons/ExitForm';
import useFormStore from '@/store/formStore';

const DynamicUpdateView = dynamic(() => import('./FormViews/UpdateView'), {
  ssr: false,
});

const ReportForm = () => {
  const { step } = useFormStore();

  return (
    <div className="h-screen w-full bg-white">
      {/* <ExitForm /> */}
      {step === 3 ? null : (
        <h1 className="text-xl font-medium">Report your incident</h1>
      )}
      <form action="" className="flex flex-col">
        {step === 0 ? <CategoryView /> : null}
        {step === 1 ? <PhotoView /> : null}
        {step === 2 ? <SummaryView /> : null}
        {step === 3 ? <LocationView /> : null}
        {step === 4 ? <DynamicUpdateView /> : null}
        <div className="flex-1">
          <div className="flex mt-80">
            <p>Do not enter </p>
          </div>
        </div>
        {step === 4 ? null : <FormButtons />}
      </form>
    </div>
  );
};

export default ReportForm;
