import { Avatar, CardContent, Divider, Grid, Icon, IconButton, withStyles } from '@material-ui/core'
import { ArrowRight } from '@material-ui/icons'
import React from 'react'
import { ArrowDownIcon } from '../Icons/ArrowDown'
import { ArrowUpIcon } from '../Icons/ArrowUp'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { CommentBoxIcon } from '../Icons/CommentBox'
import { PersonLocation } from '../Icons/PersonLocation'
import { ImagePreview } from '../ImagePreview'
import { StyledCardHeader, StyledCard } from "../StyledCard"

const GREEN = "#219653"
const RED = "#EC2F2F"


const StyledCardContent = withStyles({
    root: {
        paddingBottom: "0px!important"
    }
})(CardContent)
const SStyledCard = withStyles({
    root: {
        paddingBottom: "0px"
    }
})(StyledCard)

export const TenderContainer = ({
    id,
    author,
    created_at,
    header,
    text,
    photos,
    comments,
    liked,
    disliked,
    likes = 0,
    dislikes = 0,
    onClick,
    ...rest
}) => {
    const getCommentsLength = () => {
        let l = comments.length;
        for (let c of comments) {
            if (c.children)
                l += c.children.length;
        }
        return l
    }
    return (
        <SStyledCard elevation={0} {...rest}>
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
                subheader={`${new Date(created_at).toLocaleDateString()} ${new Date(created_at).toLocaleTimeString()}  №${id}`}
                action={
                    <IconButton onClick={onClick}>
                        <ArrowRight />
                    </IconButton>
                }
            />
            <StyledCardContent>
                <div className="appeal__content__comment">
                    {header &&
                        <>
                            {header}
                            <br></br>
                        </>
                    }
                    {text}
                </div>
                <Grid
                    container
                    style={{
                        gap: 10
                    }}
                >
                    {photos.map((p, i) =>
                        <Grid item key={i}>
                            <ImagePreview
                                src={p}
                                alt="img"
                            />
                        </Grid>
                    )}
                </Grid>
                <Divider style={{ marginTop: 15 }} />
                <div className="tender_footer">
                    <div className="tender_footer__left">
                    </div>
                    <div className="tender_footer__right">
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            height: 32,
                            color: "rgba(156, 156, 156, 1)"
                        }}>
                            <IconButton onClick={onClick}>
                                <CommentBoxIcon style={{ fill: "transparent", width: 32, height: 32, flex: 1 }} />
                            </IconButton>
                            <div style={{ fontSize: 14, fontWeight: 500 }}>
                                {getCommentsLength()} Ответов
                            </div>
                        </div>
                        <div className="tender_footer__right_likes">
                            <IconButton>
                                <ArrowUpIcon style={{ width: 30, height: 30, stroke: liked ? GREEN : "#BDBDBD" }} />
                            </IconButton>
                            <div style={{ color: liked ? GREEN : disliked ? RED : "#BDBDBD", fontWeight: 500  }}>
                                {liked && likes}
                                {disliked && dislikes}
                                {(!disliked && !liked) && "0"}
                            </div>
                            <IconButton>
                                <ArrowDownIcon style={{ width: 30, height: 30, stroke: disliked ? RED : "#BDBDBD" }} />
                            </IconButton>
                        </div>
                    </div>
                </div>

            </StyledCardContent>
        </SStyledCard>
    )
}
