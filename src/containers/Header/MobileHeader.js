import React, { useState } from 'react'
import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, withStyles } from "@material-ui/core"

import "./style.css"
import { UserAvatar } from './UserAvatarContainer'
import { UsersNotifications } from './UsersNotifications'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Close, Menu } from '@material-ui/icons'
import { PersonIcon } from '../Icons/PersonIcon'
import { InfoIcon } from '../Icons/InfoIcon'
import { WarnFileIcon } from '../Icons/WarnFile'
import { ChatIcon } from '../Icons/Chat'
import { LightIcon } from '../Icons/Light'
import { BillNoteIcon } from '../Icons/BillNote'
import { LogoIcon } from './LogoIcon'

const StyledAppBar = withStyles({
    root: {
        boxShadow: "none",
        color: "white",
        zIndex: 1300
    }
})(AppBar)

const StyledToolbar = withStyles({
    gutters: {
        paddingLeft: "0px",
        paddingRight: "0px"
    }
})(Toolbar)

const StyledDrawer = withStyles({
    paper: {
        top: 56,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        '@media (min-width: 600px)' : {
            top: 64
        }
    }
})(Drawer)

const PATHS = [
    {
        icon: WarnFileIcon,
        label: "Сообщайте о проблемах",
        path: "#",
        color: "#EC2F2F"
    },
    {
        icon: ChatIcon,
        label: "Местные новости",
        path: "/news",
        color: "#2D9CDB"
    },
    {
        icon: LightIcon,
        label: "Идеи и предложения",
        path: "/ideas",
        color: "#219653"
    },
    {
        icon: BillNoteIcon,
        label: "Обсуждения тендеров",
        path: "/tenders",
        color: "#9B51E0"
    },
    {
        icon: InfoIcon,
        label: "Контакты",
        path: "/contacts",
        color: "#F2994A"
    },
]

export const MobileHeader = ({ color, textColor }) => {
    const app = useSelector(state => state.app)

    const [open, setOpen] = useState(false)

    const history = useHistory()

    const toggleOpen = () => setOpen(p => !p)
    return (
        <>
            <StyledAppBar
                color={!color ? "transparent" : color}
                style={textColor && { color: textColor }}
            >
                <StyledToolbar>
                    <div className="header__align_left" style={{ justifyContent: "center" }}>
                        <IconButton
                            onClick={toggleOpen}
                        >
                            {open ? <Close /> : <Menu />}
                        </IconButton>
                    </div>
                    <div className="header__align_center" style={{ justifyContent: "center" }}>

                        <IconButton>
                            <LogoIcon />
                        </IconButton>
                    </div>
                    <div className="header__align_rigth">
                        {
                            app.isAuthed ?
                                <>
                                    <div style={{ padding: "16px 20px 16px 16px" }}>
                                        <UsersNotifications notificationsCount={3} />
                                    </div>
                                    <IconButton onClick={() => history.push('/personal')} >
                                        <UserAvatar/>
                                    </IconButton>
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
            <StyledDrawer
                open={open}
                onClose={toggleOpen}
                anchor="top"
                variant="persistent"
            >
                <List className="mobile_list">
                    {PATHS.map((e, i) => {
                        const Icon = e.icon
                        return <Link to={e.path} key={i}>
                            <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon style={{ fill: "transparent", stroke: e.color, width: 30, height: 30 }} />
                                </ListItemIcon>
                                <ListItemText primary={e.label}/>
                            </ListItem>
                        </Link>
                    })}
                </List>
            </StyledDrawer>
        </>
    )
}
