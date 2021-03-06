import React, { useEffect } from 'react'
import { AppBar, Button, Icon, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core"
import { UserAvatar } from './UserAvatarContainer'
import { UsersNotifications } from './UsersNotifications'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StyledButton } from '../StyledButton'
import { MobileHeader } from "./MobileHeader"
import LogoImage from './logo.png'

import "./style.css"

const StyledAppBar = withStyles(theme => ({
    root: {
        boxShadow: "none",
        backgroundColor: "hsla(0, 0%, 0%, 0.4)",
        color: theme.palette.getContrastText("hsla(0, 0%, 10%, 0)")
    }
}))(AppBar)

const StyledToolbar = withStyles({
    gutters: {
        paddingLeft: "11%",
        paddingRight: "11%",
        '@media (max-width: 1200px)' : {
            paddingLeft: "32px",
            paddingRight: "32px",
        }
    }
})(Toolbar)

export const Header = ({color, textColor}) => {
    const app = useSelector(state => state.app)
    const history = useHistory()
    const location = useLocation()

    const width = window.innerWidth


    // render
    if (width < 800)
        return <MobileHeader color="white" textColor="black"/>
    return (
        <StyledAppBar
            color={!color ? "transparent" : color}
            style={ textColor && { color: textColor }}
        >
            <StyledToolbar>
                <div className="header__align_left">
                    <Link className="link" to="/home">
                        <img
                            src={LogoImage}
                            className="header__logo"
                        >
                        </img>
                    </Link>
                </div>
                <div className="header__align_center">
                    <Link className="link" to="/appeals">
                        <h3>
                            Обращения
                        </h3>
                    </Link>
                    <Link className="link" to="/news">
                        <h3>
                            Новости
                        </h3>
                    </Link>
                    <Link className="link" to="/tenders">
                        <h3>
                            Тендеры
                        </h3>
                    </Link>
                    <Link className="link" to="/ideas">
                        <h3>
                            Идеи и предложения
                        </h3>
                    </Link>
                    <Link className="link" to="/contacts">
                        <h3>
                            Контакты
                        </h3>
                    </Link>
                </div>
                <div className="header__align_rigth">
                    {
                        app.isAuthed ?
                            <>
                                <div style={{ padding: "16px 20px 16px 16px" }}>
                                    <UsersNotifications notificationsCount={0} />
                                </div>
                                <UserAvatar src={app.user?.photo} alt={app.user?.name} onClick={() => history.push('/personal')} />
                            </>
                            :
                            <Link className="link"
                                to={`${location.pathname}/auth`}
                            >
                                <StyledButton
                                    color="primary"
                                    variant="contained"
                                >
                                    Авторизоваться
                            </StyledButton>
                            </Link>
                    }
                </div>
            </StyledToolbar>
        </StyledAppBar>
    )
}
