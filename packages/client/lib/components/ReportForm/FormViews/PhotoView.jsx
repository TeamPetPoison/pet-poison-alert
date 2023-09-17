import Image from 'next/image';
import { useRef } from 'react';
import useFormStore from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

const PhotoView = () => {
  const photos = useFormStore((state) => state.photos);
  const setPhotos = useFormStore((state) => state.setPhotos);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { files } = e.target;
    // TODO: Add logic here to check for files type and size
    if (photos.length > 0) {
      if (files.length) {
        setPhotos([...photos, ...Array.from(files)]);
      }
    } else {
      if (files.length) {
        setPhotos(Array.from(files));
      }
    }
  };

  /* handles the clicking of the button regardless
  whether clicking button directly or label */
  const handleRef = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl mt-4">Photos (optional)</h3>
      <div className="flex items-center justify-center m-auto p-2 w-11/12">
        <div
          onClick={handleRef}
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background shadow-md"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <SVGIcon name="photoIcon" className="text-foreground" />
            <p className="mb-2 text-sm text-foreground">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-foreground">
              PNG, JPG, or WEBP (Max File Size 10MB)
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="flex items-center bg-primary hover:primary-700 text-background font-bold py-2.5 px-3.5 rounded-xl"
          >
            <SVGIcon
              className="pr-1 text-background"
              name="documentMagnifyingGlassIcon"
            />
            Browse Photos
          </button>
          <input
            onChange={handleChange}
            ref={inputRef}
            id="photos"
            name="photos"
            type="file"
            accept=".png,.jpg,.jpeg,.webp"
            capture="environment"
            multiple
            className="hidden"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap m-auto pt-2">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className=" relative m-1">
              <Image
                width={20}
                height={20}
                className="w-20 h-auto rounded-lg"
                src={URL.createObjectURL(photo)}
                onLoad={(e) => {
                  // TODO add functionality for checking size of images
                  const img = e.target;
                  if ('src' in img && typeof img.src === 'string') {
                    URL.revokeObjectURL(img.src);
                  }
                }}
                alt=""
              />
              <button
                onClick={() => removePhoto(index)}
                className="z-10 absolute top-0.5 right-0.5 text-foreground"
              >
                <SVGIcon name="xCircleIcon" />
              </button>
            </div>
          ))
        ) : (
          <div>No files selected</div>
        )}
      </div>
    </div>
  );
};

export default PhotoView;
