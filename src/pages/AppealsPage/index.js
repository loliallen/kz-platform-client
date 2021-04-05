import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeMap from '../../components/HomeMap'
import { AppealContainer } from '../../containers/AppealContainer'
import { Main } from '../../containers/Main'
import appealAction from '../../storage/actions/appealAction'


const LatestAppealBlock = (props) => {
    const user = useSelector(s => s.app.user)
    const latestAppeal = useSelector(s => s.appeal.latest)
    const categories = useSelector(s => s.category.list)

    if (!latestAppeal)
        return null
    return <div
        className="latest_appeal__container"
    >
        <AppealContainer
            appeal_id="XXXXXX"
            address={latestAppeal.address}
            comment={latestAppeal.comment}
            category={latestAppeal.category}
            status={0}
            date={Date.now()}
            photos={latestAppeal.imgs}
            user={user}
        />
    </div>
}


export const AppealsPage = () => {
    const dispatch = useCallback(useDispatch(), [])

    useEffect(()=>{
        dispatch(appealAction.request())
    },[])
    return (
        <Main>
            <LatestAppealBlock/>
            <div>
                <HomeMap
                    google
                />
            </div>
        </Main>
    )
}
