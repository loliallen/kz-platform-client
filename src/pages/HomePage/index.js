import { Typography } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import HomeMap from '../../components/HomeMap'
import HomeSelectAction from '../../components/HomeSelectAction'
import { MessageSendIcon } from '../../containers/Icons/MessageSend'
import { StyledButton } from '../../containers/StyledButton'
import appealAction from '../../storage/actions/appealAction'
import { AuthorizationPage } from '../AuthorizationPage'
import { CreateAppealPage } from '../CreateAppealPage'

import "./style.css"

const PATHS = [
    '/home/appeal/create',
    '/appeals',
    '/news',
    '/tenders',
    '/ideas',
]
export const HomePage = () => {
    const history = useHistory()
    const dispatch = useCallback(useDispatch())
    const appeals = useSelector(s => s.appeal.list)

    const [page, setPage] = useState(0)
    const [random4Appeals, setRandom4Appeals] = useState([])

    const handleChangePage = p => history.push(PATHS[p])
    const width = window.innerWidth

    useEffect(() => {
        dispatch(appealAction.request())
    }, [])

    useEffect(()=> {
        if (appeals?.length > 0) {
            const ri = Array.from({ length: appeals.length }, () => Math.random())
            console.log(ri)
            let l = 4
            let r = []
            for (let i = 0; i < appeals.length; i++){

                if (r.length - 1 >= l)
                    break
                if (ri[i] < 0.5)
                    r.push(appeals[i])
            }
            setRandom4Appeals(r)
        }
    }, [appeals])

    return (
        <div className="home_page__container">
            <HomeMap
                randomPoints={random4Appeals}
            />
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
                        height: "0px",
                        color: "white",
                        zIndex: 100
                    }}
                >
                    <Typography
                        variant={width < 800 ? "h3" : "h1"}
                        style={{
                            fontWeight: width < 800 ? "500" : "700",
                            pointerEvents: "none"
                        }}
                    >
                        Сообщайте
                        <br />
                        о проблемах
                    </Typography>
                    {width < 800 &&
                        <Link className="link" to="/home/appeal/create">
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
