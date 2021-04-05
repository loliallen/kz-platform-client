import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ImagePreview } from '../ImagePreview'
import { CurrentTenderComments } from './CurrentTenderComments'
import { CurrentTenderTextContainer } from './CurrentTenderTextContainer'


export const CurrentTender = ({...tender}) => {

    return (
        <div>
            <div>
                <CurrentTenderTextContainer
                    author={tender.author}
                    text={tender.text}
                    created_at={tender.created_at}
                />
            </div>
            <div>
                <div>
                    <Grid
                        container
                        style={{
                            gap: 10
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
                <CurrentTenderComments comments={tender.comments} />
            </div>
        </div>
    )
}
