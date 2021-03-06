import { Badge } from '@material-ui/core'
import { NotificationsOutlined } from '@material-ui/icons'
import React from 'react'

export const UsersNotifications = ({ notificationsCount }) => {
    return (
        <Badge badgeContent={notificationsCount} color="error">
            <NotificationsOutlined />
        </Badge>
    )
}
