import { Avatar, Card, CardContent, CardHeader, Grid, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { PersonLocation } from '../Icons/PersonLocation'
import { ImagePreview } from '../ImagePreview'
import { StyledCard, StyledCardHeader } from "../StyledCard"
import "./style.css"


const SelectStatus = ({ s }) => {
    if (s > 0 && s < 5)
        return  <span style={{ color: "#F2C94C" }}>На рассмотрении</span>;
    switch (s) {
        case 5:
            return <span style={{ color: "green" }}>Дан ответ</span>;
        default:
            return <span style={{ color: "red" }}>Не рассмотрена</span>;

    }
}

export const AppealContainer = ({
    appeal_id,
    comment,
    category,
    photos,
    status,
    address,
    date,
    user,
    ...rest
}) => {
    return (
        <StyledCard {...rest}>
            <StyledCardHeader
                avatar={
                    <Avatar
                        src={user?.image}
                        alt={user?.name}
                    />
                }
                title={
                    user?.name
                }
                subheader={`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}  №${appeal_id}`}
                action={
                    <SelectStatus s={status} />
                }
            >
            </StyledCardHeader>
            <CardContent>
                <div className="appeal__content__info">
                    { category && <div className="appeal__content__info__inner">
                        <BriefcaseIcon />
                        <span>{category?.title}</span>
                    </div>}
                    { address && <div className="appeal__content__info__inner">
                        <PersonLocation />
                        <span>{address}</span>
                    </div>}
                </div>
                <div className="appeal__content__comment">
                    {comment}
                </div>
                <Grid
                    container
                    style={{
                        gap: 10
                    }}
                >
                    {photos?.map((p, i) =>
                        <Grid item key={i}>
                            <ImagePreview
                                src={p}
                                alt="img"
                            />
                        </Grid>
                    )}
                </Grid>

            </CardContent>
        </StyledCard>
    )
}
