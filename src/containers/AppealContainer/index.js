import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { BriefcaseIcon } from '../Icons/Brifecase'
import { PersonLocation } from '../Icons/PersonLocation'
import { ImagePreview } from '../ImagePreview'
import { StyledCard, StyledCardHeader } from "../StyledCard"
import "./style.css"


const SelectStatus = ({ s }) => {
    s = Number(s)
    if (s > 0 && s < 5)
        return <span style={{ fontSize: 16, fontWeight: 500, color: "#F2C94C" }}>На рассмотрении</span>;
    switch (s) {
        case 5:
            return <span style={{ fontSize: 16, fontWeight: 500, color: "green" }}>Дан ответ</span>;
        default:
            return <span style={{ fontSize: 16, fontWeight: 500, color: "red" }}>Не рассмотрена</span>;

    }
}

export const AppealContainer = ({
    appeal_id,
    id,
    comment,
    category,
    photos,
    status,
    address,
    date,
    user,
    organId,
    response,
    hide_response,
    anonim,
    anonimLabel = "Аноним",
    ...rest
}) => {
    console.log(id, "anonim", anonim)
    return (
        <StyledCard elevation={0} {...rest}>
            <StyledCardHeader
                avatar={
                    <Avatar
                        src={user?.image}
                        alt={user?.name}
                    />
                }
                title={
                    !user?.name || anonim ? anonimLabel : user?.name
                }
                subheader={
                    <>
                        {`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()} `}
                        <Link to={`/appeals/${appeal_id || id}`}>№{appeal_id || id}</Link>
                    </>
                }
                action={
                    <SelectStatus s={status} />
                }
            >
            </StyledCardHeader>
            <CardContent>
                <div className="appeal__content__info">
                    {category && <div className="appeal__content__info__inner">
                        <BriefcaseIcon />
                        <span>{category?.title}</span>
                    </div>}
                    {address && <div className="appeal__content__info__inner">
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
                {(status === 5 && !hide_response) && <>
                        <Divider />
                        <div className="answer__label">Ответ от ответсвеннго органа</div>
                        <div className="answer__text">{response.text}</div>
                        <div className="answer__date">{new Date(response.date).toLocaleString()}</div>
                    </>
                }
            </CardContent>
        </StyledCard>
    )
}
