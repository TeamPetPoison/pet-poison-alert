import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

const GoBack = ({ prevStep }) => {
    return (
        <button
            className='flex items-center justify-center bg-white text-black text-xl border py-1.5 m-1 w-1/2 rounded-2xl'
            onClick={prevStep}
        >
            Back
            <ArrowUturnLeftIcon className="h-6 w-6 pl-1"/>
        </button>
    )
}   

export default GoBack