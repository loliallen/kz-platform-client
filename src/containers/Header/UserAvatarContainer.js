import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'

export const UserAvatar = ({alt = "tmp", src, ...rest}) => {
    return <IconButton {...rest}>
            <Avatar alt={alt} src={src}/>
        </IconButton>
}
