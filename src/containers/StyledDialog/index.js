import React from "react"
import { withStyles, Dialog, Slide } from "@material-ui/core"

export const StyledDialog_ = withStyles({
    paper: {
        minHeight: "577px",
        borderRadius: "20px",
        '@media (max-width: 800px)' : {
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px"
        }
    }
})(Dialog)

export const StyledDialog_sm = withStyles({
    paper: {
        minHeight: "406px",
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

export const StyledDialog = ({auth, ...props}) => {
    const width = window.innerWidth
    if (auth)
        return <StyledDialog_sm
            {...props}
            TransitionComponent={Transition}
            keepMounted
            fullScreen={width <= 800}
            fullWidth={width <= 800 || props.fullWidth}
        />
    return <StyledDialog_
        {...props}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={width <= 800}
        fullWidth={width <= 800 || props.fullWidth}
    />
}
