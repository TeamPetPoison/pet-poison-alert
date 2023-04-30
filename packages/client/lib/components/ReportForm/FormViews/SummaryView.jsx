import useFormStore from '@/store/formStore';
import Image from 'next/image';

const SummaryView = () => {
  const category = useFormStore(state => state.category)
  const photos = useFormStore(state => state.photos)
  const title = useFormStore(state => state.title)
  const description = useFormStore(state => state.description)
  const location = useFormStore(state => state.location)

  return (
    <div className="flex-1">
      <h2 className="text-xl mt-4">Summary of report</h2>
      <h3 className="text-md">Please confirm the details of your report</h3>
      <h2 className="text-xl mt-4">Category</h2>
      <div className='flex items-center'>
        <input type="radio" readOnly checked className='h-4 w-4'/>
        <label htmlFor="" className='pl-3'>{category}</label>
      </div>
      <h2 className="text-xl mt-4">Photos</h2>
      <div className='flex h-[100px] overflow-y-hidden'>
          {photos.length > 0 ? (
              photos.map((photo, index) => (
                <div key={index} className="relative m-1">
                  <Image
                    width={20}
                    height={20}
                    className="w-20 h-auto rounded-lg"
                    src={URL.createObjectURL(photo)}
                    onLoad={(e) => {
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
      <h2 className="text-xl mt-4">Title</h2>
      <input
          type="text"
          value={title}
          placeholder="Provide a title for the report"
          disabled
          className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
      <h2 className="text-xl mt-4">Description</h2>
      <textarea
        value={description}
        rows={4}
        className="block p-2.5 w-full text-black bg-white rounded-lg border border-gray-300 focus:ring-primary focus:primary shadow-md"
        placeholder="Provide a description of your report"
        disabled
      ></textarea>
      <h2 className="text-xl mt-4">Location</h2>
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
