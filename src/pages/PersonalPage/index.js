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
    const canEdit = !!token
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState(null)
    const [vk, setVk] = useState("")

    const handleSetName = (e) => setName(e.target.value)
    const handleSetCity = (e) => setCity(e.target.value)
    const handleSetEmail = (e) => setEmail(e.target.value)
    const handleSetPhone = (e) => setPhone(e.target.value)
    const handleSetVk = (e) => setVk(e.target.value)


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
        if (canEdit)
            dispatch(appActions.saveEdits({
                token: token,
                data: {
                    name: name === "" ? null : name,
                    address: city === "" ? null : city,
                    email: email === "" ? null : email,
                    phone: phone === "" ? null : phone,
                    photo: photo,
                }
            }))
    }
    if (!user && !token)
        return <Redirect to="/home/auth" />
    if (!user)
        return null

    if (!user)
        return null
    return <UserContainer user={user} edit={edit} setEdit={setEdit}/>
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
                    <AboutMe user={user}/>
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
