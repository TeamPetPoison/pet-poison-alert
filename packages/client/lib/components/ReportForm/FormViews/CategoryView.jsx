import useFormStore from '@/store/formStore';

const CategoryView = () => {
  const { category, setCategory } = useFormStore();

  return (
    <div className='flex-1'>
      <h2 className="text-lg mt-4">Category of incident</h2>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Lost/Missing Pet'}
          type="radio"
          name="Lost/Missing Pet"
          id="Lost/Missing Pet"
        />
        <label htmlFor="Lost/Missing Pet">Lost/Missing Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Found Pet'}
          type="radio"
          name="Found Pet"
          id="Found Pet"
        />
        <label htmlFor="Found Pet">Found Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Needs Medical Treatment'}
          type="radio"
          name="Needs Medical Treatment"
          id="Needs Medical Treatment"
        />
        <label htmlFor="Needs Medical Treatment">Needs Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Gave/Received Medical Treatment'}
          type="radio"
          name="Gave/Received Medical Treatment"
          id="Gave/Received Medical Treatment"
        />
        <label htmlFor="Gave/Received Medical Treatment">Gave/Received Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Gave Food'}
          type="radio"
          name="Gave Food"
          id="Gave Food"
        />
        <label htmlFor="Gave Food">Gave Food</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Poisoning'}
          type="radio"
          name="Poisoning"
          id="Poisoning"
        />
        <label htmlFor="Poisoning">Poisoning</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'Other'}
          type="radio"
          name="Other"
          id="Other"
        />
        <label htmlFor="Other">Other</label>
      </div>
    </div>
  );
};

export default CategoryView;
