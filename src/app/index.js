import React from 'react'
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


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F80ED",
            contrastText: "white"
        }
    },
    typography: {

    }
})

export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <Switch>
                <Route exact path="/" component={()=><Redirect to="/home" />} />
                <Route path="/home" component={()=><HomePage/>}/>
                <Route path="/news" component={()=><NewsPage/>}/>
                <Route path="/personal" component={()=><PersonalPage/>}/>
                <Route path="/appeals" component={()=><AppealsPage/>}/>
                <Route path="/ideas" component={()=><IdeasPage/>}/>
                <Route exact path="/tenders" component={()=><TendersPage/>}/>
                <Route path="/tenders/current" component={()=><TenderCurrentPage/>}/>
            </Switch>
        </MuiThemeProvider>
    )
}
