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
        console.log(tenders)
    }, [])
    const selectTender = (data) => {
        dispatch(tenderActions.set_current(data))
        history.push('/tenders/current')
    }
    return (
        <Main>
            <StyledTypographyHeader
                title="Тендеры"
            />
            <div className="tender__container">
                {tenders.map((tender, index) =>
                    <TenderContainer
                        onClick={()=>selectTender(tender)}
                        key={index}
                        {...tender}
                    />
                )}
            </div>
        </Main>
    )
}
