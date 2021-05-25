import { Typography } from '@material-ui/core'
import React from 'react'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'

export const ContactsPage = () => {
    return (
        <Main>
            <StyledTypographyHeader
                title="Контакты"
            />
            <Typography variant="h5" component="span" style={{color: "red"}}>Горячая линия: </Typography>
            <a style={{fontSize: 20, fontWeight: 500}}className="link" href="tel: +77012027766">+7 (701) 202 77-66</a>
        </Main>
    )
}
