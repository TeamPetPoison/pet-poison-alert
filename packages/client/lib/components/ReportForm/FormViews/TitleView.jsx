import { useFormStore, useFormStoreActions } from '../../../../store/formStore';

const TitleView = () => {
  const description = useFormStore((state) => state.description);
  const formErrorState = useFormStore((state) => state.error);
  const title = useFormStore((state) => state.title);

  const { setDescription, setTitle } = useFormStoreActions();

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
      <h2 className="mt-4 text-xl">Provide a short title</h2>
      <div>
        <label htmlFor="title" className="text-foreground mb-2 block">
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
          className="text-foreground border-border bg-background focus:ring-primary focus:border-primary block w-full rounded-lg border p-2 shadow-md"
        />
        <div
          className={`text-negative text-xs ${
            isTitleValid() ? 'invisible' : 'visible'
          }`}
        >
          Please provide a title.
        </div>
      </div>
      <h2 className="mt-4 text-xl">Explain the incident</h2>
      <label htmlFor="description" className="text-foreground mb-2 block">
        e.g. {'"'}Next to the dirt road, there was a dog...{'"'}
      </label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows={4}
        required
        className="text-foreground bg-background border-border focus:ring-primary focus:primary block w-full rounded-lg border p-2.5 shadow-md"
        placeholder="Provide a description of your report"
      ></textarea>
      <div
        className={`text-negative text-xs ${
          isDescriptionValid() ? 'invisible' : 'visible'
        }`}
      >
        Please provide a description
      </div>
    </div>
  );
};

export default TitleView;
