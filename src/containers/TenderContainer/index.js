import { Avatar, CardContent, Divider, Grid, IconButton } from '@material-ui/core'
import React from 'react'
import { ArrowDownIcon } from '../Icons/ArrowDown'
import { ArrowUpIcon } from '../Icons/ArrowUp'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { PersonLocation } from '../Icons/PersonLocation'
import { ImagePreview } from '../ImagePreview'
import { StyledCardHeader, StyledCard } from "../StyledCard"

const GREEN = "#219653"
const RED = "#EC2F2F"


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
    likes,
    dislikes,
    ...rest
}) => {
    const getCommentsLength = () => {
        let l = comments.length;
        for(let c of comments){
            if (c.children)
                l+=c.children.length;
        }
        return l
    }
    return (
        <StyledCard {...rest}>
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
            />
            <CardContent>
                {/* <div className="appeal__content__info">
                    <div className="appeal__content__info__inner">
                        <BriefcaseIcon />
                        <span>{category}</span>
                    </div>
                    <div className="appeal__content__info__inner">
                        <PersonLocation />
                        <span>{address}</span>
                    </div>
                </div> */}
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
                        <div>
                            {getCommentsLength()} Ответов
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

            </CardContent>
        </StyledCard>
    )
}
