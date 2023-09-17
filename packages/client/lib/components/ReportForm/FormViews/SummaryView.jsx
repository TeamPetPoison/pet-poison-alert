import Image from 'next/image';
import useFormStore from '../../../../store/formStore';

const SummaryView = () => {
  const category = useFormStore((state) => state.category);
  const photos = useFormStore((state) => state.photos);
  const title = useFormStore((state) => state.title);
  const description = useFormStore((state) => state.description);
  const location = useFormStore((state) => state.location);

  return (
    <div className="flex-1">
      <h2 className="mt-4 text-xl">Summary of report</h2>
      <h3 className="text-md">Please confirm the details of your report</h3>
      <h2 className="mt-4 text-xl">Category</h2>
      <div className="flex items-center">
        <input type="radio" readOnly checked className="h-4 w-4" />
        <label htmlFor="" className="pl-3">
          {category}
        </label>
      </div>
      <h2 className="mt-4 text-xl">Photos</h2>
      <div className="flex h-[100px]">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="relative m-1">
              <Image
                width={20}
                height={20}
                className="h-auto w-20 rounded-lg"
                src={URL.createObjectURL(photo)}
                onLoad={(e) => {
                  if ('src' in e.target && typeof e.target.src === 'string') {
                    URL.revokeObjectURL(e.target.src);
                  }
                }}
                alt=""
              />
            </div>
          ))
        ) : (
          <div>No files selected</div>
        )}
      </div>
      <h2 className="mt-4 text-xl">Title</h2>
      <input
        type="text"
        value={title}
        placeholder="Provide a title for the report"
        disabled
        className="text-foreground border-border bg-background focus:ring-primary focus:border-primary block w-full rounded-lg border p-2 shadow-md"
      />
      <h2 className="mt-4 text-xl">Description</h2>
      <textarea
        value={description}
        rows={4}
        className="text-foreground bg-background border-border focus:ring-primary focus:primary block w-full rounded-lg border p-2.5 shadow-md"
        placeholder="Provide a description of your report"
        disabled
      ></textarea>
      <h2 className="mt-4 text-xl">Location</h2>
      <input
        type="text"
        value={`${location.lat}, ${location.lng}`}
        placeholder="Provide a location or coordinates"
        disabled
        className="text-foreground border-border bg-background focus:ring-primary focus:border-primary block w-full rounded-lg border p-2 shadow-md"
      />
    </div>
  );
};

export default SummaryView;
