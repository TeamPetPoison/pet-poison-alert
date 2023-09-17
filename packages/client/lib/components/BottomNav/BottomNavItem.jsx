const BottomNavItem = ({ name, setActive, selected, children }) => {
  return (
    <button
      onClick={setActive}
      className={`flex flex-col items-center justify-center text-sm ${
        selected ? 'text-selected' : ''
      }`}
    >
      {children}
      <div className="pt-1.5">{name}</div>
    </button>
  );
};

export default BottomNavItem;
