import { Divider, Grid, IconButton, Tabs, TextField, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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

const StyledTabs = withStyles({
    indicator: {
        display: "none"
    }
})(Tabs)


const AboutMe = ({ user }) => {
    const [edit, setEdit] = useState(false)

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSetName = (e) => setName(e.target.value)
    const handleSetCity = (e) => setCity(e.target.value)
    const handleSetEmail = (e) => setEmail(e.target.value)
    const handleSetPhone = (e) => setPhone(e.target.value)

    return <div className="aboutme__container">
        <div
            className="aboutme__avatar_container"
        >
            <img
                className="aboutme__avatar"
                src={user.image}
                alt="aboutme__avatar"
            />
        </div>
        {!edit ?
            <div className="aboutme__info_container">
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                    {user.name}
                    <IconButton
                        onClick={() => setEdit(true)}
                    >
                        <Edit />
                    </IconButton></Typography>

                <div className="aboutme__info_inner">
                    <PersonLocation />
                    <span>{user.address.city}</span>
                </div>
                <div className="aboutme__info_inner">
                    <PersonEmail />
                    <span>{user.email}</span>
                </div>
                <div className="aboutme__info_inner">
                    <PersonPhone />
                    <span>{user.phone}</span>
                </div>

            </div>
            :
            <div style={{ width: "100%" }}>
                <Grid container style={{ marginBottom: "30px" }}>
                    <Grid item xs>
                        <TextField
                            variant="outlined"
                            label="ФИО"
                            value={name}
                            onChange={handleSetName}
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
                    <Grid item xs>
                        <StyledButton
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Сохранить</StyledButton>
                    </Grid>
                </Grid>

                <Grid container >

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
                            label="Email"
                            value={email}
                            onChange={handleSetEmail}
                        />
                    </Grid>
                    <Grid item xs>
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
            </div>
        }

    </div>
}

const MyAppeals = ({ user }) => {
    const appeal = {
        appeal_id: "321312",
        comment: "На комплексе ППИ около гаражей снег не вывозится, а сгребается в огромную кучу. Местная детвора вырыла в горе пещеру и играет в ней. Над пещерой 2 метра плотного снега. Если он рухнет, то детей заживо похоронит под 2х метровым слоем. Надо срочно вывезти эту кучу!",
        category: "Дворы / Неубранный снег, гололед во дворе",
        photos: [
            "https://images.unsplash.com/photo-1566503732689-934bcd9a4d90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvY2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600003014308-b91e8feb7dbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1595350576574-c04292c1b371?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvY2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        status: 0,
        address: "Пермь ГО, Пермь, Профессора Дедюкина, 8",
        date: Date.now(),
        user: user
    }
    return <div className="myappeals__container">
        <AppealContainer {...appeal} />
        <AppealContainer {...appeal} />
        <AppealContainer {...appeal} />
        <AppealContainer {...appeal} />
        <AppealContainer {...appeal} />
    </div>
}

const TabPanel = ({ index, page, children }) => {
    if (index !== page)
        return null
    return children
}


export const PersonalPage = () => {
    const [page, setPage] = useState(0)

    const user = useSelector(s => s.app.user)


    const handleChangePage = (e, v) => setPage(v)
    return (
        <>
        {/* <Header textColor="black"/> */}
        <Main>
            <StyledTabs
                value={page}
                onChange={handleChangePage}
            >
                <StyledTab style={{ fontSize: 32, fontWeight: 700 }} label="Обо мне" />
                <StyledTab style={{ fontSize: 32, fontWeight: 700 }} label="Мои обращения" />
            </StyledTabs>
            <Divider style={{ marginBottom: 40 }} />
            <TabPanel
                page={page}
                index={0}
            >
                <AboutMe user={user} />
            </TabPanel>
            <TabPanel
                page={page}
                index={1}
            >
                <MyAppeals user={user} />
            </TabPanel>
        </Main>
        </>
    )
}
