import { useState } from "react";

const BottomNavItem = ({ icon, name }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    return setSelected(!selected);
  };

  return (
    <div
      onClick={handleClick}
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
