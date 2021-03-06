import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import "./style.css"

export const ImagePreview = (props) => {
    const match = useRouteMatch()
    return (
        <Link className="link" className="image_preview__container" to={match.url +'/image/'+encodeURIComponent(props.src)}>
            <img className="image_preview__img"{...props}/>
        </Link>
    )
}
