import React from 'react'
import { withStyles, makeStyles, Tab } from "@material-ui/core"


const StyledTab = withStyles((theme) => ({
    root: {
        "--hover-color": "green",
        "--icon-fill-color": "white",
        "--icon-stroke-color": "var(--hover-color)",
        height: "160px",
        flex: 1,
        maxWidth: "none",
        borderRadius: "20px",
        transition: "all 500ms ease",
        '&:hover': {
            backgroundColor: "var(--hover-color)",
            color: "white",
            "--icon-fill-color": "var(--hover-color)",
            "--icon-stroke-color": "white",
        },
        '&$selected': {
            backgroundColor: "var(--hover-color)",
            color: 'white'
        },
        paddingLeft: "40px",
        paddingBottom: "28px",
        '@media (max-width: 1000px)' : {
            paddingLeft: "8px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            height: 100
        }
    },
    wrapper: {
        alignItems: "start",
        textTransform: "none",
        fontSize: "22px",
        textAlign: "left",
        lineHeight: "26.4px",
        '@media (max-width: 800px)' : {
            alignItems: "center",
            fontSize: "16px"
        }
    }
}))(Tab)

const useStyles = makeStyles({
    icon: {
        fill: "var(--hover-color)",
        "$:hover": {
            fill: 'currentColor',
        }
    }
})


export const StyledColoredTab = ({
    hoverColor,
    ...rest
}) => {
    const styles = useStyles()

    const colors = { blue: "#2B7AE5", red: "#EC2F2F", blue2: "#2D9CDB", purple: "#9B51E0", green: "#219653", }

    const currentColor = colors[hoverColor]
    if (!currentColor)
        currentColor = "lightgray"

        return (<StyledTab
        style={{ "--hover-color": currentColor }}
        icon={rest.icon}
        {...rest}
    />)
}
export default StyledColoredTab
