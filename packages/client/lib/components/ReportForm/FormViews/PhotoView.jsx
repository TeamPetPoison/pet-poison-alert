//@ts-check
import Image from 'next/image';
import { useRef } from 'react';
import { useFormStore, useFormStoreActions } from '../../../../store/formStore';
import { SVGIcon } from '../../common/icons/SVGIcon';

const PhotoView = () => {
  const photos = useFormStore((state) => state.photos);
  const { setPhotos } = useFormStoreActions();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { files } = e.target;

    if (files.length) {
      // TODO: Add logic here to check for files type and size
      if (photos.length > 0) {
        setPhotos([...photos, ...Array.from(files)]);
      } else {
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
      <h3 className="mt-4 text-xl">Photos (optional)</h3>
      <div className="m-auto flex w-11/12 items-center justify-center p-2">
        <div
          onClick={handleRef}
          className="border-border bg-background flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed shadow-md"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <SVGIcon name="photoIcon" className="text-foreground" />
            <p className="text-foreground mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-foreground text-xs">
              PNG, JPG, or WEBP (Max File Size 10MB)
            </p>
          </div>
          <button
            // onClick={}
            className="bg-primary hover:text-background/70 text-background flex items-center rounded-xl px-3.5 py-2.5 font-bold"
            type="button"
          >
            <SVGIcon
              className="text-background pr-1"
              name="documentMagnifyingGlassIcon"
            />
            Browse Photos
          </button>
          <input
            accept="image/*"
            className="hidden"
            id="photos"
            multiple
            name="photos"
            onChange={handleChange}
            ref={inputRef}
            type="file"
          />
        </div>
      </div>
      <div className="m-auto flex flex-wrap justify-center pt-2">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className=" relative m-1">
              <Image
                width={20}
                height={20}
                className="h-auto w-20 rounded-lg"
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
                className="absolute right-0 top-0 px-1 py-1"
                onClick={() => removePhoto(index)}
                type="button"
              >
                <SVGIcon name="xCircleIcon" className="text-negative h-7 w-7" />
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
