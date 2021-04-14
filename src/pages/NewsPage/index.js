import { Tabs, withStyles } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Main } from '../../containers/Main'
import { CurrentNew } from '../../containers/News/CurrentNew'
import { NewsContainer } from '../../containers/News/NewsContainer'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { StyledTab } from '../../containers/StyledTab'

import actions from '../../storage/actions'

import "./style.css"

const StyledTabs = withStyles({
    indicator: {
        display: "none"
    }
})(Tabs)

const NewsFlexContainer = ({children}) =>
    <div className="news_container">
        {children}
    </div>

export const NewsPage = () => {
    const __dispatch = useDispatch()
    const dispatch = useCallback(__dispatch,[])

    const newsList = useSelector(state => state.news.list)
    const currentNew = useSelector(state => state.news.current)


    const [page, setPage] = useState(0)

    useEffect(()=>{
        dispatch(actions.news.get())
    }, [])

    const selectNew = v => dispatch(actions.news.set_current(v))
    const handleChangeTab = (e, v) => setPage(v)

    return (
        <Main>
            <StyledTabs
                value={page}
                onChange={handleChangeTab}
            >
                <StyledTab label="Общие" />
                <StyledTab label="Местные" />
            </StyledTabs>
            <NewsFlexContainer>
                <CurrentNew {...currentNew}/>
                <NewsContainer
                    onSelect={selectNew}
                    news={newsList}
                />
            </NewsFlexContainer>
        </Main>
    )
}
