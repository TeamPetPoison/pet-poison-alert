import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

const CancelButton = () => {
    return (
        <button
            className='flex items-center justify-center w-1/2 bg-negative text-white text-3xl border py-2 px-4 rounded-2xl'
        >
            Cancel
            <ArrowUturnLeftIcon className="h-8 w-8 stroke-2"/>
        </button>
    )
}

export default CancelButton;