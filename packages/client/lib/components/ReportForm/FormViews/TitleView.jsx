import useFormStore from '../../../../store/formStore';

const TitleView = () => {
  const title = useFormStore((state) => state.title);
  const setTitle = useFormStore((state) => state.setTitle);
  const description = useFormStore((state) => state.description);
  const setDescription = useFormStore((state) => state.setDescription);
  const formErrorState = useFormStore((state) => state.error);

  const isTitleValid = () => {
    if (!title && formErrorState) {
      return false;
    }
    return true;
  };

  const isDescriptionValid = () => {
    if (!description && formErrorState) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex-1">
      <h2 className="text-xl mt-4">Provide a short title</h2>
      <div>
        <label htmlFor="title" className="block mb-2 text-foreground">
          e.g. {'"'}Dog found on Example Road, near hotel{'"'}
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          value={title}
          required
          placeholder="Provide a title for the report"
          className="block w-full p-2 text-foreground border border-gray-300 rounded-lg bg-background focus:ring-primary focus:border-primary shadow-md"
        />
        <div
          className={`text-xs text-negative ${
            isTitleValid() ? 'invisible' : 'visible'
          }`}
        >
          Please provide a title.
        </div>
      </div>
      <h2 className="text-xl mt-4">Explain the incident</h2>
      <label htmlFor="description" className="block mb-2 text-foreground">
        e.g. {'"'}Next to the dirt road, there was a dog...{'"'}
      </label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows={4}
        required
        className="block p-2.5 w-full text-foreground bg-background rounded-lg border border-gray-300 focus:ring-primary focus:primary shadow-md"
        placeholder="Provide a description of your report"
      ></textarea>
      <div
        className={`text-xs text-negative ${
          isDescriptionValid() ? 'invisible' : 'visible'
        }`}
      >
        Please provide a description
      </div>
    </div>
  );
};

export default TitleView;
