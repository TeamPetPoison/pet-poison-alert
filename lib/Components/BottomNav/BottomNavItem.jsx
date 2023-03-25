const BottomNavItem = ({ name, setActive, selected, children }) => {
  return (
    <button
    onClick={setActive}
      className={`flex items-center justify-center flex-col ${
        selected ? "text-selected" : ""
      }`}
    >
      {children}
      <div>{name}</div>
    </button>
  );
};

export default BottomNavItem;
