import React, { useCallback, useEffect, useState } from 'react'
// import Geocode from "react-geocode"
import { Button, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import Map from '../../components/Map'
import { AppealContainer } from '../../containers/AppealContainer'
import { PointAnsweredIcon, PointIdleIcon, PointOnReviewIcon, PointTotalIcon } from '../../containers/Icons/LocationPoints'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import appealAction from '../../storage/actions/appealAction'
import { BriefcaseIcon } from '../../containers/Icons/Brifecase'
import { PersonLocation } from '../../containers/Icons/PersonLocation'
import { MoreVertOutlined } from '@material-ui/icons'
import { useLocation, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"



import "./style.css"
import { FilterIcon } from '../../containers/Icons/FilterIcon'
import { api_key } from '../../utils/mapConfig'
import categoryActions from '../../storage/actions/categoryActions'




const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const SelectPoints = ({ s }) => {
    if (s > 0 && s < 5)
        return PointOnReviewIcon;
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
    const [address, setAddress] = useState("")

    useEffect(()=>{
        if (latestAppeal) {
            setAddress(latestAppeal.address)
        }
    }, [latestAppeal])


    if (!latestAppeal)
        return null
    return <div
        className="latest_appeal__container"
    >
        <AppealContainer
            appeal_id="XXXXXX"
            category={categories.find(c => c.id == latestAppeal.category)?.name || latestAppeal.category}
            comment={latestAppeal.comment}
            status={0}
            date={Date.now()}
            photos={latestAppeal.photos}
            user={user}
        />
        <div>
            <div style={{
                height: "300px",
                marginBottom: "20px",
                position: 'relative'
            }}>
                <Map
                    style={{
                        height: "300px",
                        borderRadius: "20px",
                        width: "100%"
                    }}
                    center={latestAppeal.latlng}
                />
            </div>
            <div>
                <div className="appeal__content__info__inner">
                    <BriefcaseIcon />
                    <span>{categories.find(c => c.id == latestAppeal.category).name}</span>
                </div>
                {address && <div className="appeal__content__info__inner">
                    <PersonLocation />
                    <span>{address}</span>
                </div>}
            </div>
        </div>
    </div>
}

const CurrentAppealBlock = (props) => {
    const appeal = useSelector(s => s.appeal.current)
    const categories = useSelector(s => s.category.list)
    const [address, setAddress] = useState("")
    const [categoryLabel, setCategoryLabel] = useState("")
    const user = appeal?.author
    useEffect(()=>{
        if (appeal) {
            setAddress(appeal.address)
        }
    }, [appeal])

    useEffect(() => {
        if (categories.length > 0 && appeal) {
            setCategoryLabel(categories.find(c => c.id == appeal.category)?.name || "------")
        }
    }, [categories.length, appeal])


    if (!appeal)
        return null
    return <div
        className="latest_appeal__container"
    >
        <AppealContainer
            appeal_id={appeal.id || "XXXXXX"}
            category={appeal.category}
            comment={appeal.comment}
            status={0}
            date={Date.now()}
            photos={appeal.photos}
            user={user}
        />
        <div>
            <div style={{
                height: "300px",
                marginBottom: "20px",
                position: 'relative'
            }}>
                <Map
                    style={{
                        height: "300px",
                        borderRadius: "20px",
                        width: "100%"
                    }}
                    center={appeal.coords}
                />
            </div>
            <div>
                <div className="appeal__content__info__inner">
                    <BriefcaseIcon />
                    <span>{appeal.category?.title}</span>
                </div>
                <div className="appeal__content__info__inner">
                    <PersonLocation />
                    <span>{address}</span>
                </div>
            </div>
        </div>
    </div>
}

const FILTERS = [
    {
        icon: <PointTotalIcon style={{ width: "4.1vh", height: "4.1vh" }} />,
        label: "всего обращений",
        filterName: "total"
    },
    {
        icon: <PointIdleIcon style={{ width: "5vh", height: "5vh", fill: "#EC2F2F" }} />,
        label: "не рассмотренно",
        filterName: "idle"
    },
    {
        icon: <PointOnReviewIcon style={{ width: "5vh", height: "5vh", fill: "#F2C94C" }} />,
        label: "на расмотрении",
        filterName: "on_review"
    },
    {
        icon: <PointAnsweredIcon style={{ width: "5vh", height: "5vh" }} />,
        label: "дан ответ",
        filterName: "answered"
    }
]


const Filters = ({handleFiltering, getAppealCounter}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const width = window.innerWidth
    if (width <= 800)
        return <div className="appeal_filters_c">
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                style={{
                    backgroundColor: "white",
                    top: 8,
                    left: 8,
                }}
                onClick={handleClick}
            >
                <FilterIcon style={{
                    fill: "transparent",
                    width: 32,
                    height: 32
                }} />
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {FILTERS.map((filter, i) =>
                    <StyledMenuItem
                        key={i}
                        onClick={handleFiltering(filter.filterName)}
                    >
                        <ListItemIcon>
                            {filter.icon}
                        </ListItemIcon>
                        <ListItemText primary={filter.label} secondary={getAppealCounter(filter.filterName)}/>
                    </StyledMenuItem>
                )}
            </StyledMenu>
        </div>
    return <div className="appeal_filters">
        {FILTERS.map((filter, i) =>
            <Button
                key={i}
                variant="outlined"
                style={{
                    borderRadius: 20,
                    textAlign: "start"
                }}
                startIcon={filter.icon}
                onClick={handleFiltering(filter.filterName)}
            >
                {filter.label}
                <br></br>
                ({getAppealCounter(filter.filterName)()})
            </Button>
        )}
    </div>
}


const CreateAppealButton = () => {
    const location = useLocation()
    const width = window.innerWidth
    if (width > 800)
        return null
    return <div className="create__appeal_button">
        <Link className="link" to={`${location.pathname}/appeal/create`}>
            <Button
                color="primary"
                variant="contained"
                >
                Подать обращение
            </Button>
        </Link>
    </div>
}

export const AppealsPage = () => {
    const dispatch = useCallback(useDispatch(), [])
    const appeals = useSelector(s => s.appeal.list)
    const appeal_counters = useSelector(s => s.appeal.counters)
    const location = useSelector(s => s.app.position)
    const match = useRouteMatch()


    const handleFiltering = field => () => {
        dispatch(appealAction.set_filter(field))
    }
    const getFilterCounter = (name) => () => {
        return appeal_counters[name]
    }

    useEffect(() => {
        dispatch(appealAction.request())
        dispatch(categoryActions.request())
    }, [])

    useEffect(() => {
        if (appeals.length > 0 && match.params.id){
            dispatch(appealAction.set_current(appeals.find(e => e.id == match.params.id)))
        }
    }, [appeals, match.params.id])

    return (
        <Main>
            <StyledTypographyHeader
                title="Обращения"
            />
            <LatestAppealBlock />
            <CurrentAppealBlock />
            <div className="appeal_filters__container">
                <Filters
                    getAppealCounter={getFilterCounter}
                    handleFiltering={handleFiltering}
                />
                <CreateAppealButton />
                <div
                    style={{
                        height: "60vh",
                        marginBottom: "30px",
                        backgroundColor: "gray",
                        borderRadius: "20px",
                        position: 'relative'
                    }}
                >
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "black",
                        opacity: 0.2,
                        zIndex: 4,
                        pointerEvents: "none"
                    }} />
                    <Map
                        center={location}
                        styles={{
                            height: "60vh",
                            borderRadius: "20px"
                        }}
                        points={appeals.map(a => ({ coords: a.coords, status: a.status }))}
                    />
                </div>
            </div>

            <div className="appeals_container">
                <div>
                    {appeals.slice(0, Math.round(appeals.length / 2)).map((appeal, i) => {
                        return <AppealContainer key={i} id={appeal.id} style={{ marginBottom: 20 }} key={i} {...appeal} appeal_id={appeal.id} category={appeal.category} />
                    })}
                </div>
                <div>
                    {appeals.slice(Math.round(appeals.length / 2), appeals.length).map((appeal, i) => {
                        return <AppealContainer key={i} id={appeal.id} style={{ marginBottom: 20 }} key={i} {...appeal} appeal_id={appeal.id} category={appeal.category} />
                    })}
                </div>
            </div>
        </Main>
    )
}
