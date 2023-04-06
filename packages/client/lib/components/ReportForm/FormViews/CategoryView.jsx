import useFormStore from '@/store/formStore';

const CategoryView = () => {
  const { category, setCategory } = useFormStore();

  return (
    <div className='flex-1'>
      <h2 className="text-lg mt-4">Category of incident</h2>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'lost-pet'}
          type="radio"
          name="lost-pet"
          id="lost-pet"
        />
        <label htmlFor="lost-pet">Lost/Missing Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'found-pet'}
          type="radio"
          name="found-pet"
          id="found-pet"
        />
        <label htmlFor="found-pet">Found Pet</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'needs-medical'}
          type="radio"
          name="needs-medical"
          id="needs-medical"
        />
        <label htmlFor="needs-medical">Needs Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'gave-medical'}
          type="radio"
          name="gave-medical"
          id="gave-medical"
        />
        <label htmlFor="gave-medical">Gave/Received Medical Treatment</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'gave-food'}
          type="radio"
          name="gave-food"
          id="gave-food"
        />
        <label htmlFor="gave-food">Gave Food</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'poisoning'}
          type="radio"
          name="poisoning"
          id="poisoning"
        />
        <label htmlFor="poisoning">Poisoning</label>
      </div>
      <div>
        <input
          onChange={({ target }) => setCategory(target.name)}
          checked={category === 'other'}
          type="radio"
          name="other"
          id="other"
        />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  );
};

export default CategoryView;
