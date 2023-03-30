const SummaryView = ({ formData, setFormData }) => {
  return (
    <>
      <h2 className="text-lg mt-4">Provide a short title</h2>
      <div>
        <label htmlFor="title" className="block mb-2 text-black">
          e.g. "Dog found on Example Road, near hotel"
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Provide a title for the report"
          className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-primary focus:border-primary shadow-md"
        />
      </div>
      <h2 className="text-lg mt-4">Explain the incident</h2>
      <label htmlFor="description" className="block mb-2 text-black">
        e.g. "Next to the dirt road, there was a dog..."
      </label>
      <textarea
        id="description"
        name="description"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary focus:primary shadow-md"
        placeholder="Provide a description of your report"
      ></textarea>
    </>
  );
};

export default SummaryView;
