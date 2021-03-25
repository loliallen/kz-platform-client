import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core"

import "./style.css"
import { UserAvatar } from './UserAvatarContainer'
import { UsersNotifications } from './UsersNotifications'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StyledButton } from '../StyledButton'
import { Menu } from '@material-ui/icons'
import { PersonIcon } from '../Icons/PersonIcon'

const StyledAppBar = withStyles({
    root: {
        boxShadow: "none",
        color: "white"
    }
})(AppBar)

const StyledToolbar = withStyles({
    gutters: {
        paddingLeft: "0px",
        paddingRight: "0px"
    }
})(Toolbar)

export const MobileHeader = ({ color, textColor }) => {
    const app = useSelector(state => state.app)
    const history = useHistory()
    return (
        <StyledAppBar
            color={!color ? "transparent" : color}
            style={textColor && { color: textColor }}
        >
            <StyledToolbar>
                <div className="header__align_left" style={{justifyContent: "start"}}>
                    <IconButton>
                        <Menu />
                    </IconButton>
                </div>
                <div className="header__align_center" style={{justifyContent: "center"}}>
                    LOGO
                </div>
                <div className="header__align_rigth">
                    {
                        app.isAuthed ?
                            <>
                                <div style={{ padding: "16px 20px 16px 16px" }}>
                                    <UsersNotifications notificationsCount={3} />
                                </div>
                                <UserAvatar onClick={() => history.push('/personal')} />
                            </>
                            :
                            <Link
                                to='/home/auth'
                            >
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                            </Link>
                    }
                </div>
            </StyledToolbar>
        </StyledAppBar>
    )
}
