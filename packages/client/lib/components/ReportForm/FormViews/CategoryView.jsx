import useFormStore from '../../../../store/formStore';

const categoryOptions = [
  'Lost/Missing Pet',
  'Found Pet',
  'Needs Medical Treatment',
  'Gave/Received Medical Treatment',
  'Gave Food',
  'Poisoning',
  'Other',
];

const CategoryView = () => {
  const category = useFormStore((state) => state.category);
  const setCategory = useFormStore((state) => state.setCategory);
  const formErrorState = useFormStore((state) => state.error);

  const handleChange = ({ target }) => {
    setCategory(target.value);
  };

  const isFormValid = () => {
    if (!category && formErrorState) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex-1">
      <h2 className="mt-4 text-xl">Category of incident</h2>
      <h3 className="text-lg">Please choose one category</h3>
      {categoryOptions.map((option) => (
        <div className="flex items-center" key={option}>
          <input
            onChange={handleChange}
            checked={category === option}
            type="radio"
            name="category"
            className="h-4 w-4"
            id={option}
            value={option}
            required
          />
          <label htmlFor={option} className="p-1">
            {option}
          </label>
        </div>
      ))}
      <p
        className={`text-negative text-xs ${
          isFormValid() ? 'invisible' : 'visible'
        }`}
      >
        Please provide a category
      </p>
    </div>
  );
};

export default CategoryView;
