import { Avatar, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { PersonLocation } from '../Icons/PersonLocation'
import { StyledCardHeader } from "../StyledCard"


const StyledPaper = withStyles({
    root: {
        borderRadius: "20px",
        backgroundColor: "rgba(249, 249, 249, 1)",
        marginRight: "40px",
        padding: "30px",
        '@media (max-width: 1000px)': {
            marginRight: "0px"
        }
    }
})(Paper)

export const CurrentTenderTextContainer = ({ author, text, created_at, ...rest }) => {
    const category = "Mock category"
    const address = "Mock address"
    return (
        <StyledPaper>
            <StyledCardHeader
                style={{
                    padding: 0
                }}
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
            <div className="appeal__content__info">
                {category && <div className="appeal__content__info__inner">
                    <BriefcaseIcon />
                    <span>{category}</span>
                </div>}
                {address && <div className="appeal__content__info__inner">
                    <PersonLocation />
                    <span>{address}</span>
                </div>}
            </div>
            <Typography
                variant="body1"
                style={{ marginTop: 30 }}
            >
                {text}
            </Typography>
        </StyledPaper>
    )
}
