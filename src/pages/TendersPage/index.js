import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { TenderContainer } from '../../containers/TenderContainer'
import tenderActions from '../../storage/actions/tenderActions'

export const TendersPage = () => {

    const history = useHistory()

    const tenders = useSelector(s => s.tender.list)
    const dispatch = useCallback(useDispatch(), [])

    useEffect(() => {
        dispatch(tenderActions.request())
    }, [])
    const selectTender = (data) => {
        dispatch(tenderActions.set_current(data))
        history.push('/tenders/current')
    }
    return (
        <Main>
            <StyledTypographyHeader
                title="Обсуждение тендеров"
                light={false}
            />

            <div className="appeals_container">
                <div>
                    {tenders.slice(0, Math.round(tenders.length / 2)).map((tender, i) => {
                        return <TenderContainer key={i} {...tender} style={{ marginBottom: 20 }} onClick={()=>selectTender(tender)}/>
                    })}
                </div>
                <div>
                    {tenders.slice(Math.round(tenders.length / 2), tenders.length).map((tender, i) => {
                        return <TenderContainer key={i} {...tender} style={{ marginBottom: 20 }} onClick={()=>selectTender(tender)}/>
                    })}
                </div>
            </div>
        </Main>
    )
}
