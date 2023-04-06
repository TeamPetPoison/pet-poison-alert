import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

const GoBack = ({ prevStep }) => {
    return (
        <button
            className='flex justify-between bg-white text-black text-3xl border py-2 px-4 rounded-2xl'
            onClick={prevStep}
        >
            <ArrowUturnLeftIcon className="h-8 w-8"/>
            Back
        </button>
    )
}   

export default GoBack