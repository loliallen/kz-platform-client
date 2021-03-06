import React from 'react'
import { AppBar, Button, Toolbar, Typography, withStyles } from "@material-ui/core"

import "./style.css"
import { UserAvatar } from './UserAvatarContainer'
import { UsersNotifications } from './UsersNotifications'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

export const Header = () => {
    const app = useSelector(state => state.app)
    return (
        <StyledAppBar
            color="transparent"
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
                    <Link to="/ideas">
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
                            <div style={{padding: "16px 20px 16px 16px"}}>
                                <UsersNotifications notificationsCount={3}/>
                            </div>
                            <UserAvatar />
                        </> 
                        :
                        <Link
                            to='/register'
                        >
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Авторизоваться
                            </Button>
                        </Link>
                    }
                </div>
            </StyledToolbar>
        </StyledAppBar>
    )
}
