import React from 'react'
import { AppBar, Button, Toolbar, Typography, withStyles } from "@material-ui/core"

import "./style.css"
import { UserAvatar } from './UserAvatarContainer'
import { UsersNotifications } from './UsersNotifications'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StyledButton } from '../StyledButton'
import { MobileHeader } from "./MobileHeader"


const StyledAppBar = withStyles({
    root: {
        boxShadow: "none",
        color: "white"
    }
})(AppBar)

const StyledToolbar = withStyles({
    gutters: {
        paddingLeft: "128px",
        paddingRight: "128px"
    }
})(Toolbar)

export const Header = ({color, textColor}) => {
    const app = useSelector(state => state.app)
    const history = useHistory()

    const width = window.innerWidth

    if (width < 800)
        return <MobileHeader color="white" textColor="black"/>

    return (
        <StyledAppBar
            color={!color ? "transparent" : color}
            style={ textColor && { color: textColor }}
        >
            <StyledToolbar>
                <div className="header__align_left">
                    <Typography
                        variant="h4"
                    >
                        logotip
                    </Typography>
                </div>
                <div className="header__align_center">
                    <Link to="/appeals">
                        <div>
                            Обращения
                        </div>
                    </Link>
                    <Link to="/news">
                        <div>
                            Новости
                        </div>
                    </Link>
                    <Link to="/tenders">
                        <div>
                            Тендеры
                        </div>
                    </Link>
                    <Link to="/ideas&tenders">
                        <div>
                            Идеи и предложения
                        </div>
                    </Link>
                    <Link to="/contacts">
                        <div>
                            Контакты
                        </div>
                    </Link>
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
