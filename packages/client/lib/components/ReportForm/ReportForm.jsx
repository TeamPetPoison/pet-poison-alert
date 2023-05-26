import CategoryView from './FormViews/CategoryView';
import dynamic from 'next/dynamic';
import FormButtons from './NavigationButtons/FormButtons';
import LocationView from './FormViews/LocationView';
import PhotoView from './FormViews/PhotoView';
import SummaryView from './FormViews/SummaryView';
import TitleView from './FormViews/TitleView';
import useFormStore from '../../../store/formStore';

const DynamicUpdateView = dynamic(() => import('./FormViews/UpdateView'), {
  ssr: false,
});

const renderStepMap = {
  0: CategoryView,
  1: PhotoView,
  2: TitleView,
  3: LocationView,
  4: SummaryView,
  5: DynamicUpdateView,
};

const ReportForm = () => {
  const step = useFormStore((state) => state.step);

  if (!renderStepMap[step]) {
    return null;
  }

  const RenderViewFromStep = renderStepMap[step];

  const isStepFive = step === 5;

  return (
    <div className="bg-background">
      <form
        noValidate
        className={`flex flex-col h-screen overflow-hidden ${
          step !== 5 ? 'p-2' : ''
        }`}
      >
        {!isStepFive && (
          <h1 className="text-2xl font-medium">Report your incident</h1>
        )}
        <RenderViewFromStep />

        {!isStepFive && <FormButtons />}
      </form>
    </div>
  );
};

export default ReportForm;
