import React from "react"
import { withStyles, Dialog, Slide } from "@material-ui/core"

export const StyledDialog_ = withStyles({
    paper: {
        borderRadius: "20px",
        '@media (max-width: 800px)' : {
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px"
        }
    }
})(Dialog)


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const StyledDialog = (props) => {
    const width = window.innerWidth
    return <StyledDialog_
        {...props}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={width <= 800}
        fullWidth={width <= 800}
    />
}
