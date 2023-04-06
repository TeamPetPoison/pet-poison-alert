import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

const CancelButton = () => {
    return (
        <button
            className='flex w-1/2 bg-white text-black text-3xl border py-2 px-4 rounded'
        >
            <ArrowUturnLeftIcon className="h-8 w-8"/>
            Cancel
        </button>
    )
}

export default CancelButton;