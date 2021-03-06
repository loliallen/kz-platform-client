import React, { useState } from 'react'
import { Route } from 'react-router'
import HomeMap from '../../components/HomeMap'
import HomeSelectAction from '../../components/HomeSelectAction'
import { Header } from '../../containers/Header'
import { AuthorizationPage } from '../AuthorizationPage'

import "./style.css"

export const HomePage = () => {
    const [page, setPage] = useState(0)
    return (
        <div className="home_page__container">
            <Header/>
            <HomeMap
                google
            />
            <HomeSelectAction
                value={page}
                setValue={setPage}
            />
            <Route path="/register" component={()=><AuthorizationPage />}/>
        </div>
    )
}
