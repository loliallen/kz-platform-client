import { Avatar, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { PersonLocation } from '../Icons/PersonLocation'
import { StyledCardHeader } from "../StyledCard"
import "./CurrentTenderTextContainer.css"

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
    const category = rest.category || "Mock category"
    const address = rest.address || "Mock address"
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
            <div className="tender__content__info">
                {category && <div className="tender__content__info__inner">
                    <BriefcaseIcon />
                    {category}
                </div>}
                {address && <div className="tender__content__info__inner">
                    <PersonLocation />
                    {address}
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
