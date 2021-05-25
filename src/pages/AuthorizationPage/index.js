import { Dialog, DialogActions, DialogContent, DialogTitle, Tab, Tabs, TextField, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { LockIcon } from '../../containers/Icons/Lock'
import { MessageIcon } from '../../containers/Icons/Message'
import { StyledButton } from '../../containers/StyledButton'
import { StyledDialog } from '../../containers/StyledDialog'
import { StyledDialogTitle } from '../../containers/StyledHeader'
import { StyledDialogContent } from '../../containers/StyledDialogContent'
import { StyledTab } from '../../containers/StyledTab'
import actions from '../../storage/actions'


import "./style.css"

const StyledTabs = withStyles({
    indicator: {
        display: "none"
    }
})(Tabs)

const FormContainer = ({
    children,
    actionA,
    actionB,
    onSubmit
}) =>
    <form onSubmit={onSubmit}>
        <StyledDialogContent>
            {children}
        </StyledDialogContent>
        <DialogActions className="login_container login_action">
            {actionA && <div className="login_action__a">
                <Link className="link"
                    style={{ textDecoration: "none", color: "#2F80ED", width: "100%", fontSize: 16 }}
                    to="/forgot"
                >
                    Забыли пароль?
                        </Link>
            </div>
            }
            {actionB && <div
                className="login_action__button"
            >

                <StyledButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    {actionB}
                </StyledButton>
            </div>
            }

        </DialogActions>
    </form>



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

    return <FormContainer
        onSubmit={handleSubmit}
        actionA={true}
        actionB={"Войти"}
    >
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Адрес электронной почты или логин"
                fullWidth
                value={login}
                onChange={handleChangeLogin}
                InputProps={{
                    startAdornment: <MessageIcon style={{ fill: "white", paddingRight: "14px" }} />
                }}
            />
        </div>
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Пароль"
                fullWidth
                value={password}
                type="password"
                onChange={handleChangePassword}
                InputProps={{
                    startAdornment: <LockIcon style={{ fill: "white", paddingRight: "14px" }} />
                }}
            />
        </div>
    </FormContainer>
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
    return <FormContainer
        onSubmit={handleSubmit}
        actionA={false}
        actionB={"Зарегистрироваться"}
    >
        <div className="login_container"
        >
            <TextField
                variant="outlined"
                label="Адрес электронной почты или логин"
                fullWidth
                value={login}
                onChange={handleChangeLogin}
                InputProps={{
                    startAdornment: <MessageIcon style={{ fill: "white", paddingRight: "14px" }} />
                }}
            />
        </div>
        <div className="login_container">
            <TextField
                variant="outlined"
                label="Пароль"
                fullWidth
                value={password}
                type="password"
                onChange={handleChangePassword}
                InputProps={{
                    startAdornment: <LockIcon style={{ fill: "white", paddingRight: "14px" }} />
                }}
            />
        </div>
    </FormContainer>
}



export const AuthorizationPage = () => {
    const [page, setPage] = useState(0)

    const history = useHistory()
    const isAuthed = useSelector(s => s.app.isAuthed)


    const handleChangeTab = (e, nv) => setPage(nv)
    const handleClose = () => history.goBack()

    useEffect(() => {
        if (isAuthed) {
            handleClose()
        }
    }, [isAuthed])

    return (
        <StyledDialog
            open={true}
            auth={true}
            fullWidth
            onClose={handleClose}
        >
            <StyledDialogTitle onClose={handleClose} />
            <div style={{ padding: "0 12px" }}>
                <StyledTabs
                    value={page}
                    onChange={handleChangeTab}
                >
                    <StyledTab label="Вход" />
                    <StyledTab label="Регистрация" />
                </StyledTabs>
            </div>
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
        </StyledDialog>
    )
}
