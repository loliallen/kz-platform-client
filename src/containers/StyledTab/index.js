import { Tab, withStyles } from "@material-ui/core";

export const StyledTab = withStyles({
    root: {
        minWidth: "0px",
        opacity: 0.2,
        marginRight: 10
    },
    wrapper: {
        fontWeight: "700",
        textTransform: "none",
        fontSize: "32px",
        flexDirection: "row",
        justifyContent: "start",
    },

})(Tab)
