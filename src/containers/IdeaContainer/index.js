import { Avatar, CardActionArea, CardContent, Divider, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { ArrowUpIcon } from '../Icons/ArrowUp'
import { ArrowDownIcon } from '../Icons/ArrowDown'
import { StyledCard, StyledCardHeader } from '../StyledCard'
import "./style.css"

const GREEN = "#219653"
const RED = "#EC2F2F"

export const IdeaContainer = ({
    date,
    title,
    content,
    userId,
    comments,
    likes,
    dislikes,
    liked = false,
    disliked = false
}) => {
    return (
        <StyledCard
            style={{ border: `2px solid ${liked ? GREEN : disliked ? RED : "white"}` }}
        >
            <StyledCardHeader
                subheader={date.toLocaleDateString()}
            />
            <CardContent>
                <Typography variant="h5" style={{ fontWeight: 500, lineHeight: "1.48rem", marginBottom: 10}}>{title}</Typography>
                <Typography>{content}</Typography>
            </CardContent>
            <Divider />
            <div className="tender_footer">
                <div className="tender_footer__left">
                    <Avatar />
                    <div className="tender_footer__userId">
                        {userId}
                    </div>
                </div>
                <div className="tender_footer__right">
                    <div>
                        {comments} Ответов
                    </div>
                    <div className="tender_footer__right_likes">
                        <IconButton>
                            <ArrowUpIcon style={{ width: 30, height: 30, stroke: liked ? GREEN : "#BDBDBD" }} />
                        </IconButton>
                        <div style={{ color: liked ? GREEN : disliked ? RED : "#BDBDBD" }}>
                            {liked && likes}
                            {disliked && dislikes}
                        </div>
                        <IconButton>
                            <ArrowDownIcon style={{ width: 30, height: 30, stroke: disliked ? RED : "#BDBDBD" }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}
