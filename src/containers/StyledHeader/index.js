import { withStyles, DialogTitle, Typography, IconButton } from '@material-ui/core'
import { Close } from "@material-ui/icons"
import React from 'react'

export const StyledDialogTitle = withStyles(theme => ({
    root: {
        marginBottom: "30px"
    },
    reverse: {
        marginBottom: "30px",
        backgroundColor: "#232323",
        color: "white"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}))((props) => {
    const { children, classes, onClose, reverse = false, ...other } = props;
    return (
      <DialogTitle disableTypography className={reverse ? classes.reverse : classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  });
