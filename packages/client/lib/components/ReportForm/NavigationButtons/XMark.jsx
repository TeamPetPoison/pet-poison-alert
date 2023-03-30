import { XMarkIcon } from "@heroicons/react/24/outline";

export const XMark = () => {
    return (
    <button onClick={(e) => e.preventDefault()}>
        <XMarkIcon className="z-10 h-4 w-4"/>
    </button>
)
}

export default XMark;