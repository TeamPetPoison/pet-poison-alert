const BottomNavItem = ({icon, name, active}) => {
    const handleClick = () => {
        return !active
    }

    return (
        <div onClick={handleClick} className={`flex items-center justify-center flex-col ${active ? "text-selected underline" : ""}`}>
            {icon}
            <div className="pointer-events-none">{name}</div>
        </div>
    )
}

export default BottomNavItem;