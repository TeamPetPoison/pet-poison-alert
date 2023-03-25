const BottomNavItem = ({ icon, name, setActive, selected }) => {
  return (
    <button
    onClick={setActive}
      className={`flex items-center justify-center flex-col ${
        selected ? "text-selected" : ""
      }`}
    >
      {icon}
      <div>{name}</div>
    </button>
  );
};

export default BottomNavItem;
