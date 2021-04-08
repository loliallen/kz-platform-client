import { Button, Grid } from '@material-ui/core'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Map from '../../components/Map'
import { AppealContainer } from '../../containers/AppealContainer'
import { PointAnsweredIcon, PointIdleIcon, PointOnReviewIcon, PointTotalIcon } from '../../containers/Icons/LocationPoints'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import appealAction from '../../storage/actions/appealAction'


const SelectPoints = ({ s }) => {
    if (s > 0 && s < 5)
        return  PointOnReviewIcon;
    switch (s) {
        case 5:
            return PointTotalIcon;
        default:
            return PointIdleIcon;
    }
}
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
    const appeals = useSelector(s => s.appeal.list)
    const appeal_counters = useSelector(s => s.appeal.counters)
    useEffect(()=>{
        dispatch(appealAction.request())
    },[])
    return (
        <Main>
            <StyledTypographyHeader
                title="Обращения"
            />
            <LatestAppealBlock/>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 40,
                marginBottom: 30
            }}>
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: 20
                    }}
                    startIcon={<PointTotalIcon style={{ width: "5vh", height: "5vh"}}/>}
                >Всего обращений ({appeal_counters.total})</Button>
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: 20
                    }}
                    startIcon={<PointIdleIcon style={{ width: "5vh", height: "5vh", fill: "#EC2F2F"}}/>}
                >не рассмотренно ({appeal_counters.idle})</Button>
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: 20
                    }}
                    startIcon={<PointOnReviewIcon style={{ width: "5vh", height: "5vh", fill: "#F2C94C"}}/>}
                >на расмотрении ({appeal_counters.on_review})</Button>
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: 20
                    }}
                    startIcon={<PointAnsweredIcon style={{ width: "5vh", height: "5vh", fill: "#219653"}}/>}
                >дан ответ ({appeal_counters.answered})</Button>
            </div>
            <div
                style={{
                    height: "60vh",
                    marginBottom: "30px",
                    backgroundColor: "gray",
                    borderRadius: "20px",
                    position: 'relative'
                }}
            >
                <Map
                    styles={{
                        height: "60vh",
                        borderRadius: "20px"
                    }}
                    points={appeals.map(a => ({coords: a.coords, status: a.status }))}
                />
            </div>
            <Grid
                container
                spacing={4}
                justify="space-evenly"
            >
                {appeals.map((appeal, i) => {
                    return <Grid key={i} item>
                        <AppealContainer style={{ width: 580 }} {...appeal} appeal_id={appeal.id} category={appeal.category.title} />
                    </Grid>
                })}
            </Grid>
        </Main>
    )
}
