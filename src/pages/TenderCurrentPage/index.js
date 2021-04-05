import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { TenderContainer } from '../../containers/TenderContainer'
import { CurrentTender } from '../../containers/TenderContainer/CurrentTender'
import tenderActions from '../../storage/actions/tenderActions'

export const TenderCurrentPage = () => {

    const tender = useSelector(state => state.tender.current)

    if (tender == null)
        return <Redirect to="/tenders" />
    return (
        <Main>
            <StyledTypographyHeader
                title={tender.header}
            />
            <CurrentTender
                {...tender}
            />
        </Main>
    )
}
