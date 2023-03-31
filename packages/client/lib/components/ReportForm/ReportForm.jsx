import LocationView from './FormViews/LocationView';
import PhotoView from './FormViews/PhotoView';
import SummaryView from './FormViews/SummaryView';
import UpdateView from './FormViews/UpdateView';
import FormButtons from './NavigationButtons/FormButtons';
import ExitForm from './NavigationButtons/ExitForm'
import useFormStore from '@/store/formStore';

const ReportForm = () => {
  const { step } = useFormStore()

  return (
    <div className="h-100 w-100 bg-white">
      <ExitForm />
      {step === 3 ? null : <h1 className="text-xl font-medium">Report your incident</h1>}
      <form action="">
        {step === 0 ? <PhotoView /> : null}
        {step === 1 ? <SummaryView /> : null}
        {step === 2 ? <LocationView /> : null}
        {step === 3 ? <UpdateView /> : null}
        {step === 3 ? null : <FormButtons />}
      </form>
    </div>
  );
};

export default ReportForm;
