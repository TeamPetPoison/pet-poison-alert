import { ArrowUturnRightIcon } from '@heroicons/react/24/outline';

const Continue = ({ nextStep }) => {
  return (
    <button
      className="flex justify-between bg-white text-black text-3xl border py-2 px-4 rounded-2xl"
      onClick={nextStep}
    >
      Continue
      <ArrowUturnRightIcon className="h-8 w-8" />
    </button>
  );
};

export default Continue;
