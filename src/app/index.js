import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { HomePage } from '../pages/HomePage'
import { Redirect, Route, Switch } from 'react-router'
import { NewsPage } from '../pages/NewsPage'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F80ED",
            contrastText: "white" 
        }
    }
})

export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={()=><Redirect to="/home" />} />
                <Route path="/home" component={()=><HomePage/>}/>
                <Route path="/news" component={()=><NewsPage/>}/>
            </Switch>
        </MuiThemeProvider>
    )
}
