import React, { useEffect } from 'react'
import { Dialog, DialogTitle, IconButton } from "@material-ui/core"
import { useHistory, useRouteMatch } from "react-router"
import { Close } from '@material-ui/icons'
import "./style.css"


export const ImageViewPage = ({}) => {

    const match = useRouteMatch()
    const history = useHistory()

    const src = decodeURIComponent(match.params.src)

    const onClose = () => {
        history.goBack()
    }

    return <Dialog
        open={true}
        onClose={onClose}
        maxWidth={false}
    >
        <img
            className="image_modal"
            src={src}
        ></img>
    </Dialog>
}
