import dynamic from 'next/dynamic';
import useFormStore from '../../../store/formStore';
import CategoryView from './FormViews/CategoryView';
import LocationView from './FormViews/LocationView';
import PhotoView from './FormViews/PhotoView';
import SummaryView from './FormViews/SummaryView';
import TitleView from './FormViews/TitleView';
import FormButtons from './NavigationButtons/FormButtons';

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

  // step 5 is the update view (map view)
  const isStepFive = step === 5;

  return (
    <form className="relative flex min-h-screen flex-col" noValidate>
      <div className={`flex-grow ${isStepFive ? '' : 'px-4 py-2 pb-44'}`}>
        {!isStepFive && (
          <h1 className="text-2xl font-medium">Report your incident</h1>
        )}
        <RenderViewFromStep />
      </div>

      {isStepFive ? null : <FormButtons />}
    </form>
  );
};

export default ReportForm;
