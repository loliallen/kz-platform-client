import { Card, CardHeader, withStyles } from "@material-ui/core";

export const StyledCard = withStyles({
    root: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#F9F9F9"
    },
    elevation: {
        boxShadow: "none"
    }

})(Card)



export const StyledCardHeader = withStyles({
    root: {
        paddingTop: 30,
        paddingBottom: 0,
        fontFamily: "Golos"
    },
    title: {
        fontSize: 20,
        fontWeight: 500
    },
    action: {
        marginTop: 0
    },
    subheader: {
        fontSize: 13,
        fontWeight: 500
    }
})(CardHeader)
