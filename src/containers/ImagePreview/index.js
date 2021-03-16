import React from 'react'
import "./style.css"

export const ImagePreview = (props) => {
    return (
        <div className="image_preview__container">
            <img className="image_preview__img"{...props}/>
        </div>
    )
}
