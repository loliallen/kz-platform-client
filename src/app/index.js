import React, { useCallback, useEffect } from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { HomePage } from '../pages/HomePage'
import { Redirect, Route, Switch } from 'react-router'
import { NewsPage } from '../pages/NewsPage'
import { PersonalPage } from '../pages/PersonalPage'
import { AppealsPage } from '../pages/AppealsPage'
import { IdeasPage } from '../pages/IdeasPage'
import { TendersPage } from '../pages/TendersPage'
import { TenderCurrentPage } from '../pages/TenderCurrentPage'
import { Header } from '../containers/Header'
import { CreateAppealPage } from '../pages/CreateAppealPage'
import { AuthorizationPage } from '../pages/AuthorizationPage'
import { useDispatch } from 'react-redux'
import actions from '../storage/actions'
import { api_key } from '../utils/mapConfig'
import { CreateIdeaPage } from '../pages/CreateIdeaPage'
import { ImageViewPage } from '../pages/ImageViewPage'
import { LogoutPage } from '../pages/LogoutPage'
import { ContactsPage } from '../pages/ContactsPage'
// import Geocode from "react-geocode"

// Geocode.setApiKey("AIzaSyDjU7YWT1VGnfDpyU_87VznB6xGNRWXpJM")
// Geocode.setLanguage("ru")
// Geocode.setRegion("ru")

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F80ED",
            contrastText: "white"
        }
    },
    typography: {
        fontFamily: "Golos"
    }
})

const fromGeocode = async () => {
    // const res = await Geocode.fromLatLng("55.7267532", "49.1759529")
    // console.log(res)
}


export const App = () => {
    const dispatch = useCallback(useDispatch(), [])

    useEffect(()=>{
        fromGeocode()
        const setPosition = (position) => {
            // yield put(actions.app.setPosition(position))
            // cast a region after position here
            let lat = position.coords.latitude
            let lng = position.coords.longitude

            dispatch(actions.app.setPosition({lat,lng}))
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, (err) => console.log(err));
        }
        dispatch(actions.app.init())
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <Switch>
                <Route exact path="/" component={()=><Redirect to="/home" />} />
                <Route path="/home" component={()=><HomePage/>}/>
                <Route path="/news" component={()=><NewsPage/>}/>
                <Route path="/personal" component={()=><PersonalPage/>}/>
                <Route path="/appeals/" component={()=><AppealsPage/>}/>
                <Route path="/ideas" component={()=><IdeasPage/>}/>
                <Route path="/contacts" component={()=><ContactsPage/>}/>
                <Route exact path="/tenders" component={()=><TendersPage/>}/>
                <Route path="/tenders/current" component={()=><TenderCurrentPage/>}/>
                <Route path="/logout" component={()=><LogoutPage />}/>
            </Switch>
            <Route path="/*/auth" component={()=><AuthorizationPage />}/>
            <Route path="/*/appeal/create" component={()=><CreateAppealPage />}/>
            <Route path="/*/idea/create" component={()=><CreateIdeaPage />}/>
            <Route path="/*/image/:src" component={()=><ImageViewPage />}/>
        </MuiThemeProvider>
    )
}
