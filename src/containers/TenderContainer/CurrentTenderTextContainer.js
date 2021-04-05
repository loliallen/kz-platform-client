import { Avatar, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { StyledCardHeader } from "../StyledCard"


const StyledPaper = withStyles({
    root: {
        borderRadius: "20px",
        backgroundColor: "#F1FAF8",
        marginRight: "40px",
        padding: "30px",
        '@media (max-width: 1000px)': {
            marginRight: "0px"
        }
    }
})(Paper)

export const CurrentTenderTextContainer = ({ author, text, created_at }) => {
    return (
        <StyledPaper>
            <StyledCardHeader
                avatar={
                    <Avatar
                        src={author?.photo}
                        alt={author?.name}
                    />
                }
                title={
                    author?.name
                }
                subheader={`${new Date(created_at).toLocaleDateString()} ${new Date(created_at).toLocaleTimeString()}`}
            />
            <Typography
                variant="h6"
            >
                { text }
            </Typography>
        </StyledPaper>
    )
}
