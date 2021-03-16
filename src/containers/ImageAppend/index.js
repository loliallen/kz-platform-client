import React from 'react'
import { PlusIcon } from '../Icons/Plus'

export const ImapeAppend = (props) => {
    return (
        <div
            className="image_preview__container"
            style={{
                "--background-color": "#F5F5F5",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center"
            }}
            {...props}
        >
            <PlusIcon style={{width: 50, height: 50}}/>
        </div>
    )
}
