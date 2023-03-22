const BottomNavItem = ({ icon, name, setActive, selected }) => {
  return (
    <div
    onClick={setActive}
      className={`flex items-center justify-center flex-col ${
        selected ? "text-selected underline" : ""
      }`}
    >
      {icon}
      <div className="pointer-events-none">{name}</div>
    </div>
  );
};

export default BottomNavItem;
