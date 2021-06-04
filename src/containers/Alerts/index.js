import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ErrorAlert = ({message, open, onClose}) =>
    <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left"}}  open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert severity="error" onClose={onClose}>{message}</Alert>
    </Snackbar>


export const WarnAlert = ({message, open, onClose}) =>
    <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left"}}  open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert severity="warning" onClose={onClose}>{message}</Alert>
    </Snackbar>
