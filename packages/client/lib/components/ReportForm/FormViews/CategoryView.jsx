import useFormStore from '@/store/formStore';

const CategoryView = () => {
  const { category, setCategory } = useFormStore();

  return (
    <div>
      <h2 className="text-lg mt-4">Category of incident</h2>
        <input type="radio" name="" id="" />
    </div>
  );
};

export default CategoryView;