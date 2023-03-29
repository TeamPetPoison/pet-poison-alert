const GoBack = ({ prevStep }) => {
    return (
        <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed bottom-8 left-8'
            onClick={prevStep}
        >
            Go Back
        </button>
    )
}   

export default GoBack