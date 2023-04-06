import useFormStore from '@/store/formStore';
import Image from 'next/image';

const SummaryView = () => {
  const { category, photos, title, description, location } = useFormStore();

  return (
    <div className="flex-1">
      <h2 className="text-lg">Summary of report</h2>
      <h3 className="text-md">Please confirm the details of your report</h3>
      <h2 className="text-lg">Category</h2>
      <input type="radio" readOnly checked/>
      <label htmlFor="">{category}</label>
      <h2 className="text-lg">Photos</h2>
      <div className='flex'>
          {photos.length > 0 ? (
              photos.map((photo, index) => (
                <div key={index} className=" relative m-1">
                  <Image
                    width={20}
                    height={20}
                    className="w-28 h-auto rounded-lg"
                    src={URL.createObjectURL(photo)}
                    onLoad={(e) => {
                      // add functionality for checking size of images
                      URL.revokeObjectURL(e.target.src);
                    }}
                    alt=""
                  />
                </div>
              ))
            ) : (
              <div>No files selected</div>
            )}
      </div>
      <h2 className="text-lg">Title</h2>
      <input
          type="text"
          value={title}
          placeholder="Provide a title for the report"
          disabled
          className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
      <h2 className="text-lg">Description</h2>
      <textarea
        value={description}
        rows={4}
        className="block p-2.5 w-full text-black bg-white rounded-lg border border-gray-300 focus:ring-primary focus:primary shadow-md"
        placeholder="Provide a description of your report"
        disabled
      ></textarea>
      <h2 className="text-lg">Location</h2>
      <input
          type="text"
          value={`${location.lat}, ${location.lng}`}
          placeholder="Provide a location or coordinates"
          disabled
          className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
    </div>
  );
};

export default SummaryView;
