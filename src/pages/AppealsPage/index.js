import React from 'react'
import { useSelector } from 'react-redux'
import { AppealContainer } from '../../containers/AppealContainer'
import { Main } from '../../containers/Main'


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
    return (
        <Main>
            <LatestAppealBlock/>
        </Main>
    )
}
