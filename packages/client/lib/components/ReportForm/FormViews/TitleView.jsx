import useFormStore from '@/store/formStore';

const TitleView = () => {
  const { title, setTitle, description, setDescription } = useFormStore();

  return (
    <div className='flex-1'>
      <h2 className="text-lg mt-4">Provide a short title</h2>
      <div>
        <label htmlFor="title" className="block mb-2 text-black">
          e.g. "Dog found on Example Road, near hotel"
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          value={title}
          placeholder="Provide a title for the report"
          className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary shadow-md"
        />
      </div>
      <h2 className="text-lg mt-4">Explain the incident</h2>
      <label htmlFor="description" className="block mb-2 text-black">
        e.g. "Next to the dirt road, there was a dog..."
      </label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows={4}
        className="block p-2.5 w-full text-black bg-white rounded-lg border border-gray-300 focus:ring-primary focus:primary shadow-md"
        placeholder="Provide a description of your report"
      ></textarea>
    </div>
  );
};

export default TitleView;
