const BottomNavItem = ({ icon, name, setActive, selected }) => {
  return (
    <div
    onClick={setActive}
      className={`flex items-center justify-center flex-col ${
        selected ? "text-selected" : ""
      }`}
    >
      {icon}
      <div>{name}</div>
    </div>
  );
};

export default BottomNavItem;
