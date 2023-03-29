import { useEffect, useState } from 'react'
import LocationView from './FormViews/LocationView'
import PhotoView from './FormViews/PhotoView'
import SummaryView from './FormViews/SummaryView'
import Continue from './NavigationButtons/Continue'
import GoBack from './NavigationButtons/GoBack'
import Submit from './NavigationButtons/Submit'

const ReportForm = () => {
    const [formData, setFormData] = useState({})
    const [step, setStep] = useState(0)

    useEffect(() => {
        console.log(step)
    }, [step])

    return (
        <div className='h-100 w-100'>
            <h2>Report your incident</h2>
            <form action="POST">
                {step === 0 ? <LocationView formData={formData} setFormData={setFormData}/> : null}
                {step === 1 ? <PhotoView /> : null}
                {step === 2 ? <SummaryView /> : null}
            </form>
            <div className='flex row justify-between'>
                {step < 2 ? <Continue nextStep={() => setStep(step + 1)} /> : <Submit />}
                {step > 0 ? <GoBack prevStep={() => setStep(step - 1)} /> : null}
            </div>
        </div>
    )
}

export default ReportForm;