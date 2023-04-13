import useFormStore from '@/store/formStore';

const CategoryView = () => {
  const { category, setCategory } = useFormStore();

  return (
    <div className='flex-1'>
      <h2 className="text-lg mt-4">Category of incident</h2>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Lost/Missing Pet'}
          type="radio"
          name="category"
          value="Lost/Missing Pet"
          required
        />
        <label htmlFor="Lost/Missing Pet">Lost/Missing Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Found Pet'}
          type="radio"
          name="category"
          value="Found Pet"
          required
        />
        <label htmlFor="Found Pet">Found Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Needs Medical Treatment'}
          type="radio"
          name="category"
          value="Needs Medical Treatment"
          required
        />
        <label htmlFor="Needs Medical Treatment">Needs Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Gave/Received Medical Treatment'}
          type="radio"
          name="category"
          value="Gave/Received Medical Treatment"
          required
        />
        <label htmlFor="Gave/Received Medical Treatment">Gave/Received Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Gave Food'}
          type="radio"
          name="category"
          value="Gave Food"
          required
        />
        <label htmlFor="Gave Food">Gave Food</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Poisoning'}
          type="radio"
          name="category"
          value="Poisoning"
          required
        />
        <label htmlFor="Poisoning">Poisoning</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.value)}
          checked={category === 'Other'}
          type="radio"
          name="category"
          value="Other"
          required
        />
        <label>Other</label>
      </div>
    </div>
  );
};

export default CategoryView;
