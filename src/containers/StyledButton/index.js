import { withStyles, Button } from "@material-ui/core"

export const StyledButton = withStyles({
    root: {
        borderRedius: "4px",
        minHeight: "54px",
        textTransform: "none",
        fontSize: "18px"
    }
})(Button)