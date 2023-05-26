import dynamic from 'next/dynamic';
import CategoryView from './FormViews/CategoryView';
import PhotoView from './FormViews/PhotoView';
import TitleView from './FormViews/TitleView';
import LocationView from './FormViews/LocationView';
import SummaryView from './FormViews/SummaryView';
import FormButtons from './NavigationButtons/FormButtons';

import useFormStore from '@/store/formStore';

const DynamicUpdateView = dynamic(() => import('./FormViews/UpdateView'), {
  ssr: false,
});

const ReportForm = () => {
  const step = useFormStore((state) => state.step);

  return (
    <div className="bg-background">
      <form
        noValidate
        className={`flex flex-col h-screen overflow-hidden ${
          step !== 5 ? 'p-2' : ''
        }`}
      >
        {step === 5 ? null : (
          <h1 className="text-2xl font-medium">Report your incident</h1>
        )}
        {step === 0 ? <CategoryView /> : null}
        {step === 1 ? <PhotoView /> : null}
        {step === 2 ? <TitleView /> : null}
        {step === 3 ? <LocationView /> : null}
        {step === 4 ? <SummaryView /> : null}

        {step === 5 ? <DynamicUpdateView /> : null}

        {step === 5 ? null : <FormButtons />}
      </form>
    </div>
  );
};

export default ReportForm;
