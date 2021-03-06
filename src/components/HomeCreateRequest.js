import { Dialog, DialogTitle, withStyles } from '@material-ui/core'
import React, { useState } from 'react'


const StyledDialogTitle = withStyles({
    roor: {
        backgroundColor: "black",
        color: "white"
    }
})(DialogTitle)

const Step1 = () => {
    <div>

    </div>
}

export const HomeCreateRequest = () => {
    const steps = 4
    const [step, setStep] = useState(0)
    return (
        <Dialog>
            <StyledDialogTitle title="Подать обращение"/>
            <Step1/>
        </Dialog>
    )
}
