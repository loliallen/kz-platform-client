import { Tab, withStyles } from "@material-ui/core";

export const StyledTab = withStyles({
    root: {
        minWidth: "0px"
    },
    wrapper: {
        fontWeight: "900",
        textTransform: "none",
        fontSize: "22px",
        flexDirection: "row",
        justifyContent: "start"
    }
})(Tab)
