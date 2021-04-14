import { Grid, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ImagePreview } from '../ImagePreview'
import { CurrentTenderComments } from './CurrentTenderComments'
import { CurrentTenderTextContainer } from './CurrentTenderTextContainer'

const StyledTypography = withStyles({
    root: {
        fontSize: 20
    }
})(Typography)

export const CurrentTender = (tender) => {
    const token = useSelector(s => s.app.token)
    const isAuthed = useSelector(s => s.app.isAuthed)

    return (
        <div className="current_tender__container">
            <div className="current_tender__text_container">
                <CurrentTenderTextContainer
                    author={tender.author}
                    text={tender.text}
                    created_at={tender.created_at}
                />
            </div>
            <div className="current_tender__comments_container">
                <div className="current_tender__comments__img">
                    <StyledTypography>Фотографии к тендеру</StyledTypography>
                    <Grid
                        container
                        style={{
                            gap: 10,
                            marginTop: 20
                        }}
                    >
                        {tender.photos.map((p, i) =>
                            <Grid item key={i}>
                                <ImagePreview
                                    src={p}
                                    alt="img"
                                />
                            </Grid>
                        )}
                    </Grid>
                </div>
                <div className="current_tender__comments__content">
                <StyledTypography style={{marginTop: 60, marginBottom: 20}}>Комментарии</StyledTypography>
                <CurrentTenderComments comments={tender.comments} isAuthed={isAuthed} token={token} id={tender.id} />
                </div>
            </div>
        </div>
    )
}
