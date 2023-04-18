import useFormStore from '@/store/formStore';

const CategoryView = () => {
  const { category, setCategory } = useFormStore();

  return (
    <div className="flex-1">
      <h2 className="text-xl mt-4">Category of incident</h2>
      <h3 className="text-lg">Please choose one category</h3>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Lost/Missing Pet'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Lost/Missing Pet"
          value="Lost/Missing Pet"
          required
        />
        <label htmlFor="Lost/Missing Pet" className="p-1">
          Lost/Missing Pet
        </label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Found Pet'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Found Pet"
          value="Found Pet"
          required
        />
        <label htmlFor="Found Pet" className="p-1">Found Pet</label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Needs Medical Treatment'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Needs Medical Treatment"
          value="Needs Medical Treatment"
          required
        />
        <label htmlFor="Needs Medical Treatment" className="p-1">Needs Medical Treatment</label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Gave/Received Medical Treatment'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Gave/Received Medical Treatment"
          value="Gave/Received Medical Treatment"
          required
        />
        <label htmlFor="Gave/Received Medical Treatment" className="p-1">
          Gave/Received Medical Treatment
        </label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Gave Food'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Gave Food"
          value="Gave Food"
          required
        />
        <label htmlFor="Gave Food" className="p-1">Gave Food</label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Poisoning'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Poisoning"
          value="Poisoning"
          required
        />
        <label htmlFor="Poisoning" className="p-1">Poisoning</label>
      </div>
      <div className="flex items-center">
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Other'}
          type="radio"
          name="category"
          className="w-4 h-4"
          id="Other"
          value="Other"
          required
        />
        <label htmlFor='Other' className="p-1">Other</label>
      </div>
    </div>
  );
};

export default CategoryView;
