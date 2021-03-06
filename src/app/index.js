import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { HomePage } from '../pages/HomePage'


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
            <HomePage/>
        </MuiThemeProvider>
    )
}
