const Continue = ({ nextStep }) => {
    return (
        <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded fixed bottom-8 right-8'
            onClick={nextStep}
        >
            Continue
        </button>
    )
}

export default Continue