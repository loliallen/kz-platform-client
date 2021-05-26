import { Divider, Grid, IconButton, Tabs, TextField, Typography, withStyles } from '@material-ui/core'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppealContainer } from '../../containers/AppealContainer'
import { PersonEmail } from '../../containers/Icons/PersonEmail'
import { PersonLocation } from '../../containers/Icons/PersonLocation'
import { PersonPhone } from '../../containers/Icons/PersonPhone'
import { Main } from '../../containers/Main'
import { StyledTab } from '../../containers/StyledTab'
import { StyledButton } from '../../containers/StyledButton'
import { Header } from "../../containers/Header"

import "./style.css"
import { Edit } from '@material-ui/icons'
import appealAction from '../../storage/actions/appealAction'
import appActions from '../../storage/actions/appActions'
import { VkIcon } from '../../containers/Icons/Vk'
import { Redirect, useRouteMatch } from 'react-router'
import Api from '../../service/Api'
import { UserContainer } from '../../containers/UserContainer'

const StyledTabs = withStyles({
    indicator: {
        display: "none"
    }
})(Tabs)


const AboutMe = ({ user, token }) => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState(null)
    const [vk, setVk] = useState("")
    const [vkError, setVkError] = useState("")

    const handleSetName = (e) => setName(e.target.value)
    const handleSetSurname = (e) => setSurname(e.target.value)
    const handleSetCity = (e) => setCity(e.target.value)
    const handleSetEmail = (e) => setEmail(e.target.value)
    const handleSetPhone = (e) => setPhone(e.target.value)
    const handleSetVk = (e) => {
        if (vkError)
            setVkError("")
        setVk(e.target.value)
    }


    const readFile = (file) => {

        if (file.type === "image/jpeg" || file.type === "image/png") {
            var fd = new FormData();
            fd.append("var_file", file)
            Api.Photo.create(fd)
                .then(res => {
                    setPhoto(res.url)
                })
        }
    }

    const handleSave = () => {

        let re = /vk.com\/*/
        if (!re.test(vk))
            setVkError("Не верная ссылка")
        if (!!token && re.test(vk))
            dispatch(appActions.saveEdits({
                token: token,
                data: {
                    name: name + " " + surname === user.name ? null : name + " " + surname,
                    address: city === user.address ? null : city,
                    email: email === user.email ? null : email,
                    phone: phone === user.phone ? null : phone,
                    photo: photo,
                    vk: vk === user.vk ? null : vk
                }
            }))
            setEdit(false)
    }

    useEffect(()=>{
        if(user?.name){
            setName(user?.name.split(' ')[0])
            setSurname(user?.name.split(' ')[1] || "")
        }
        if (user?.address)
            setCity(user?.address)
        if (user?.email)
            setEmail(user?.email)
        if (user?.phone)
            setPhone(user?.phone)
        if (user?.vk)
            setVk(user?.vk)
    },[user])


    if (!user && !token)
        return <Redirect to="/home/auth" />

    if (!user)
        return null

    return <>
    <UserContainer inputRef={inputRef} canEdit={!!token} user={user} edit={edit} setEdit={setEdit}>
        <div style={{ width: "100%" }}>
            <Grid container className="aboutme_grid aboutme_grid_first">

                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="Фамилия"
                        value={surname}
                        onChange={handleSetSurname}
                    />
                </Grid>

                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="Имя"
                        value={name}
                        onChange={handleSetName}
                    />
                </Grid>
                <Grid item xs className="aboutme_desktop">
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                    >Сохранить</StyledButton>
                </Grid>
            </Grid>

            <Grid container className="aboutme_grid aboutme_grid_second">

                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="Город"
                        value={city}
                        onChange={handleSetCity}
                    />
                </Grid>

                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="Телефон"
                        value={phone}
                        onChange={handleSetPhone}
                    />
                </Grid>
                <Grid item xs className="aboutme_desktop">
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="default"
                        onClick={() => setEdit(false)}
                    >
                        Отмена
                        </StyledButton>
                </Grid>
            </Grid>

            <Grid container className="aboutme_grid">
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={email}
                        onChange={handleSetEmail}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        label="ВКонтакте"
                        value={vk}
                        onChange={handleSetVk}
                        error={!!vkError}
                        helperText={vkError}
                    />
                </Grid>
                <Grid item xs />
            </Grid>
            <Grid container spacing={1} className="aboutme_grid_first aboutme_mobile aboutme_actions">
                <Grid item xs className="aboutme_mobile">
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="default"
                        onClick={() => setEdit(false)}
                    >
                        Отмена
                            </StyledButton>
                </Grid>
                <Grid item xs className="aboutme_mobile">
                    <StyledButton
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                    >Сохранить</StyledButton>
                </Grid>
            </Grid>
        </div>
    </UserContainer>
    <input
            type="file"
            hidden
            ref={inputRef}
            multiple
            onChange={(e) => {
                e.preventDefault()
                e.stopPropagation()

                const files = e.target.files;
                Object.keys(files).forEach(index => {
                    readFile(files[index]);
                })
            }}
        />
    </>
}

const MyAppeals = ({ user, token }) => {
    const dispatch = useCallback(useDispatch(), [])
    const appeals = useSelector(s => s.appeal.mine)
    const canEdit = !!token

    useEffect(() => {
        dispatch(appealAction.requestMine(token))
    }, [])
    return <div className="myappeals__container">
        {appeals.map((appeal, index) =>
            <AppealContainer key={index} {...appeal} />
        )}
    </div>
}

const TabPanel = ({ index, page, children }) => {
    if (index !== page)
        return null
    return children
}


export const PersonalPage = () => {
    const [page, setPage] = useState(0)
    const match = useRouteMatch()

    const userId = match.params.id

    const user = useSelector(s => s.app.user)
    const token = useSelector(s => s.app.token)


    const handleChangePage = (e, v) => setPage(v)


    return (
        <>
            {/* <Header textColor="black"/> */}
            <Main>
                <StyledTabs
                    value={page}
                    onChange={handleChangePage}
                >
                    <StyledTab label="Обо мне" />
                    <StyledTab style={{ maxWidth: "none" }} label="Мои обращения" />
                </StyledTabs>
                <Divider style={{ marginBottom: 40 }} />
                <TabPanel
                    page={page}
                    index={0}
                >
                    <AboutMe user={user} token={token} />
                </TabPanel>
                <TabPanel
                    page={page}
                    index={1}
                >
                    <MyAppeals user={user} token={token} />
                </TabPanel>
            </Main>
        </>
    )
}
