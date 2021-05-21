import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import HomeMap from '../../components/HomeMap'
import HomeSelectAction from '../../components/HomeSelectAction'
import { MessageSendIcon } from '../../containers/Icons/MessageSend'
import { StyledButton } from '../../containers/StyledButton'
import { AuthorizationPage } from '../AuthorizationPage'
import { CreateAppealPage } from '../CreateAppealPage'

import "./style.css"

const PATHS = [
    '/home/appeal/create',
    '#',
    '/news',
    '/tenders',
    '/ideas',
]
export const HomePage = () => {
    const history = useHistory()
    const [page, setPage] = useState(0)
    const handleChangePage = p => history.push(PATHS[p])
    const width = window.innerWidth

    return (
        <div className="home_page__container">
            <HomeMap/>
            <HomeSelectAction
                value={page}
                setValue={handleChangePage}
            />
             <div
                    style={{
                        position: "absolute",
                        top: "185px",
                        left: width < 800 ? "11%" : "11%",
                        right: "20px",
                        height: "120px",
                        color: "white",
                        zIndex: 100,
                    }}
                >
                    <Typography
                        variant={width < 800 ? "h3" : "h1"}
                        style={{
                            fontWeight: width < 800 ? "700" : "900"
                        }}
                    >
                        Сообщайте
                        <br />
                        о проблемах
                    </Typography>
                    {width < 800 &&
                        <Link to="/home/appeal/create">
                            <StyledButton
                                style={{ marginTop: "30px", zIndex: 3000 }}
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<MessageSendIcon style={{ width: "30px", height: "30px", stroke: "white", fill: "transparent" }} />}
                            >Подать обращение</StyledButton>
                        </Link>
                    }
                </div>
        </div>
    )
}
