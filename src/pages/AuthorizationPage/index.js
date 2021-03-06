import { Button, Dialog, DialogContent, DialogTitle, Tab, Tabs, TextField, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { LockIcon } from '../../containers/Icons/Lock'
import { MessageIcon } from '../../containers/Icons/Message'
import actions from '../../storage/actions'

import "./style.css"

const StyledTabs = withStyles({
    indicator: {
        display: "none"
    }
})(Tabs)

const StyledTab = withStyles({
    wrapper: {
        fontWeight: "900",
        textTransform: "none",
        fontSize: "22px"
    }
})(Tab)

const TabPanel = ({ index, page, children = null }) => children && index === page ? children : null


const LoginPanel = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeLogin = (e) => setLogin(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(actions.app.loginAction({ login, password }))
    }

    return <form
        onSubmit={handleSubmit}
    >
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Логин"
                fullWidth
                value={login}
                onChange={handleChangeLogin}
                InputProps={{
                    startAdornment: <MessageIcon style={{ fill: "white" }} />
                }}
            />
        </div>
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Пароль"
                fullWidth
                value={password}
                onChange={handleChangePassword}
                InputProps={{
                    startAdornment: <LockIcon style={{ fill: "white" }} />
                }}
            />
        </div>
        <div className="login_container login_action">
            <div style={{textAlign: "center", paddingTop: "10px"}}>
                <Link to="/forgot">
                    Забыли пароль?
                </Link>
            </div>
            <div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Войти
                </Button>
            </div>
        </div>
    </form>
}

const RegisterPanel = () => {

    const dispatch = useDispatch()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeLogin = (e) => setLogin(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(actions.app.register({ login, password }))
    }
    return <form
        onSubmit={handleSubmit}
    >
        <div className="login_container"
        >
            <TextField
                variant="outlined"
                label="Логин"
                fullWidth
                value={login}
                onChange={handleChangeLogin}
                InputProps={{
                    startAdornment: <MessageIcon style={{ fill: "white" }} />
                }}
            />
        </div>
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Пароль"
                fullWidth
                value={password}
                onChange={handleChangePassword}
                InputProps={{
                    startAdornment: <LockIcon style={{ fill: "white" }} />
                }}
            />
        </div>
        <div className="login_container login_action">
            <div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    </form>
}



export const AuthorizationPage = () => {
    const [page, setPage] = useState(0)

    const history = useHistory()

    const handleChangeTab = (e, nv) => setPage(nv)
    return (
        <Dialog
            open={true}
            maxWidth="sm"
            fullWidth
            onClose={()=>history.goBack()}
        >
            <DialogContent>
                <StyledTabs
                    value={page}
                    onChange={handleChangeTab}
                >
                    <StyledTab label="Вход" />
                    <StyledTab label="Регистрация" />
                </StyledTabs>
                <TabPanel
                    index={0}
                    page={page}
                >
                    <LoginPanel />
                </TabPanel>
                <TabPanel
                    index={1}
                    page={page}
                >
                    <RegisterPanel />
                </TabPanel>
            </DialogContent>
        </Dialog>
    )
}
