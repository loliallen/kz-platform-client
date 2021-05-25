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


const AboutMe = ({ user }) => {
    if(!user)
        return null
    return <UserContainer user={user} />
}

const MyAppeals = ({ user }) => {
    const dispatch = useCallback(useDispatch(), [])
    const appeals = useSelector(s => s.appeal.current_user_mine)
    const canEdit = false

    useEffect(() => {
        if(user && user.id)
            dispatch(appealAction.requestUser(user.id))
    }, [user])

    if (!user)
        return null
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


export const UserPage = () => {
    const match = useRouteMatch()
    const user = useSelector(s => s.app.current_user)
    const dispatch = useCallback(useDispatch())
    const userId = match.params.id

    const [page, setPage] = useState(0)


    const handleChangePage = (e, v) => setPage(v)

    useEffect(()=>{
        dispatch(appActions.getUserInfo(userId))
    },[])

    return (
        <>
            {/* <Header textColor="black"/> */}
            <Main>
                <StyledTabs
                    value={page}
                    onChange={handleChangePage}
                >
                    <StyledTab label="Обо мне" />
                    <StyledTab style={{ maxWidth: "none" }} label="Обращения пользователя" />
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
                    <MyAppeals user={user}/>
                </TabPanel>
            </Main>
        </>
    )
}
