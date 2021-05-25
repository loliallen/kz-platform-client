import { Avatar, CardActionArea, CardContent, Divider, IconButton, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { ArrowUpIcon } from '../Icons/ArrowUp'
import { ArrowDownIcon } from '../Icons/ArrowDown'
import { StyledCard, StyledCardHeader } from '../StyledCard'
import { CommentBoxIcon } from '../Icons/CommentBox'
import { Link } from 'react-router-dom'
import "./style.css"

const GREEN = "#219653"
const RED = "#EC2F2F"

const SStyledCard = withStyles({
    root: {
        paddingBottom: "0px",
        backgroundColor: "white",
        border: "1px solid #E9E9E9"
    }
})(StyledCard)
export const IdeaContainer = ({
    date,
    title,
    content,
    user,
    comments,
    likes,
    dislikes,
    liked = false,
    disliked = false,
    ...rest
}) => {
    return (
        <SStyledCard
            style={{ border: `2px solid ${liked ? GREEN : disliked ? RED : "white"}` }}
            {...rest}
        >
            <StyledCardHeader
                subheader={date.toLocaleDateString()}
            />
            <CardContent>
                <Typography variant="h6" style={{ fontWeight: 500, marginBottom: 10}}>{title}</Typography>
                <Typography variant="body1"style={{wordBreak: "break-all", fontSize: '15px' }}>{content}</Typography>
            </CardContent>
            <Divider />
            <div className="tender_footer">
                <div className="tender_footer__left">
                    <Avatar
                        src={user.photo}
                        alt={user.name}
                    />
                    <div className="tender_footer__userId">
                        <Link className="idea_author" to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </div>
                </div>
                <div className="tender_footer__right">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: 32,
                            color: "rgba(156, 156, 156, 1)"
                        }}
                    >
                        <IconButton>
                            <CommentBoxIcon style={{ fill: "transparent", width: 32, height: 32, flex: 1 }} />
                        </IconButton>
                        <div style={{ fontWeight: 500 }}>
                            {comments} Ответов
                        </div>
                    </div>
                    <div className="tender_footer__right_likes">
                        <IconButton>
                            <ArrowUpIcon style={{ width: 30, height: 30, stroke: liked ? GREEN : "#BDBDBD" }} />
                        </IconButton>
                        <div style={{ color: liked ? GREEN : disliked ? RED : "#BDBDBD", fontWeight: 500 }}>
                            {liked && likes}
                            {disliked && dislikes}
                            {!(disliked && liked) && "0"}
                        </div>
                        <IconButton>
                            <ArrowDownIcon style={{ width: 30, height: 30, stroke: disliked ? RED : "#BDBDBD" }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </SStyledCard>
    )
}
