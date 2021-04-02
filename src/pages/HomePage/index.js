import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router'
import HomeMap from '../../components/HomeMap'
import HomeSelectAction from '../../components/HomeSelectAction'
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

    return (
        <div className="home_page__container">
            <HomeMap
                google
            />
            <HomeSelectAction
                value={page}
                setValue={handleChangePage}
            />
            <Route path="/home/auth" component={()=><AuthorizationPage />}/>
            <Route path="/home/appeal/create" component={()=><CreateAppealPage />}/>
        </div>
    )
}
