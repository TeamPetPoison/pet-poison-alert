import {
  PhotoIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const PhotoView = ({ formData, setFormData }) => {
  return (
    <>
      <h3 className='text-lg mt-4'>Photos (optional)</h3>
      <div className="flex items-center justify-center m-auto p-2 w-11/12">
        <label
          htmlFor="imgURL"
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white shadow-md"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <PhotoIcon className="w-8 h-8 text-black" />
            <p className="mb-2 text-sm text-black">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-black">
              PNG, JPG, or WEBP (Max File Size 10MB)
            </p>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="flex items-center bg-primary hover:primary-700 text-white font-bold py-2.5 px-3.5 rounded-xl"
          >
            <DocumentMagnifyingGlassIcon className="w-7 h-7 pr-1 text-white" />
            Browse Photos
          </button>
          <input id="imgURL" name="imgURL" type="file" accept='.png,.jpg,.webp' capture="environment" className="hidden" />
        </label>
      </div>
    </>
  );
};

export default PhotoView;
