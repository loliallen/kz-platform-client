import { Tabs, withStyles, FormControl, FormLabel, InputLabel, Select, MenuItem } from '@material-ui/core'
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
    const localNewsList = useSelector(state => state.news.local)
    const currentNew = useSelector(state => state.news.current)
    const regions = useSelector(s => s.app.regions)
    const regionId = useSelector(s => s.app.regionId)

    const onChange = (e) => dispatch(actions.app.setRegionId(e.target.value))


    const [page, setPage] = useState(0)
    const [currentNewsList, setCurrentNewsList] = useState([])


    useEffect(()=>{
        if (page === 0){
            setCurrentNewsList(newsList)
        }
        if (page === 1) {
            setCurrentNewsList(localNewsList)
        }
    },[newsList, localNewsList, page])

    useEffect(()=>{
        dispatch(actions.news.get())
        dispatch(actions.app.requestRegions())
    }, [])

    useEffect(()=>{
        if (regionId)
            dispatch(actions.news.get_local(regionId))
    }, [regionId])

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
            {page === 1 && <FormControl
                fullWidth
                variant="outlined"
                style={{ marginBottom: 20 }}
            >
                <InputLabel id="select-sphere-label">Регион</InputLabel>
                <Select
                    labelId="select-sphere-label"
                    id="select-sphere"
                    label="Сфера"
                    onChange={onChange}
                    value={regionId}
                >
                    <MenuItem value={null}>
                        <em>Не выбрано</em>
                    </MenuItem>
                    {regions.map((r, i) => {
                        return <MenuItem key={i} value={r.id}>
                            {r?.name}
                        </MenuItem>
                    })}

                </Select>
            </FormControl>}
            <NewsFlexContainer>
                <CurrentNew {...currentNew} className="left"/>
                <NewsContainer
                    onSelect={selectNew}
                    news={currentNewsList}
                    className="right"
                />
            </NewsFlexContainer>
        </Main>
    )
}
