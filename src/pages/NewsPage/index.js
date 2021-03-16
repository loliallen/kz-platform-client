import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Main } from '../../containers/Main'
import { CurrentNew } from '../../containers/News/CurrentNew'
import { NewsContainer } from '../../containers/News/NewsContainer'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import actions from '../../storage/actions'

import "./style.css"

const NewsFlexContainer = ({children}) => 
    <div className="news_container">
        {children}
    </div>

export const NewsPage = () => {
    const __dispatch = useDispatch()
    const dispatch = useCallback(__dispatch,[])

    const newsList = useSelector(state => state.news.list)
    const currentNew = useSelector(state => state.news.current)

    useEffect(()=>{
        dispatch(actions.news.get())
    }, [])

    const selectNew = (v) => dispatch(actions.news.set_current(v))

    return (
        <Main>
            <StyledTypographyHeader 
                title="Местные новости"
                linkLabel="Все новости"
                link="/allnews"
            />
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
