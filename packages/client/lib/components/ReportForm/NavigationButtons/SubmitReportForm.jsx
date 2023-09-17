import useFormStore from '../../../../store/formStore';
import useMainStore from '../../../../store/store';
import { SVGIcon } from '../../common/icons/SVGIcon';

const SubmitReportForm = () => {
  const setShowForm = useFormStore((state) => state.setShowForm);
  const resetForm = useFormStore((state) => state.resetForm);
  const category = useFormStore((state) => state.category);
  const photos = useFormStore((state) => state.photos);
  const title = useFormStore((state) => state.title);
  const description = useFormStore((state) => state.description);
  const location = useFormStore((state) => state.location);
  const setMarkers = useMainStore((state) => state.setMarkers);

  const handleSubmit = (category, photos, title, description, location) => {
    const formObj = {
      id: Date.now(),
      category: category,
      photos: photos,
      title: title,
      description: description,
      location: location,
    };

    setMarkers(formObj);
    resetForm();
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit(category, photos, title, description, location);
        setShowForm(false);
      }}
      className="flex items-center justify-center bg-positive text-background text-xl border py-1.5 m-1 w-1/2 rounded-2xl"
    >
      Submit
      <SVGIcon name="checkIcon" className="pl-1" />
    </button>
  );
};

export default SubmitReportForm;
