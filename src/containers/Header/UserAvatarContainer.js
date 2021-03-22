import { Avatar } from '@material-ui/core'
import React from 'react'

export const UserAvatar = ({alt = "tmp", src, ...rest}) => {
    return <Avatar alt={alt} src={src} {...rest}/>
}
