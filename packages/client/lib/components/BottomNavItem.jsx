const BottomNavItem = ({ name, setActive, selected, children }) => {
  return (
    <button
    onClick={setActive}
      className={`flex items-center justify-center flex-col text-sm ${
        selected ? "text-selected" : ""
      }`}
    >
      {children}
      <div className="pt-1.5">{name}</div>
    </button>
  );
};

export default BottomNavItem;
