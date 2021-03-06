import { Avatar } from '@material-ui/core'
import React from 'react'

export const UserAvatar = ({alt = "tmp", src}) => {
    return <Avatar alt={alt} src={src}/>
}
