import { Card, CardHeader, withStyles } from "@material-ui/core";

export const StyledCard = withStyles({
    root: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#F9F9F9"
    }
})(Card)



export const StyledCardHeader = withStyles({
    root: {
        paddingTop: 30,
        paddingBottom: 0
    },
    title: {
        fontSize: 20
    },
    action: {
        marginTop: 0
    }
})(CardHeader)