
import React from 'react'
import { Divider, Grid, IconButton, Tabs, TextField, Typography, withStyles } from '@material-ui/core'
import { PersonEmail } from '../../containers/Icons/PersonEmail'
import { PersonLocation } from '../../containers/Icons/PersonLocation'
import { PersonPhone } from '../../containers/Icons/PersonPhone'
import { Main } from '../../containers/Main'
import { StyledTab } from '../../containers/StyledTab'
import { StyledButton } from '../../containers/StyledButton'
import { VkIcon } from '../../containers/Icons/Vk'
import { Edit } from '@material-ui/icons'
export const UserContainer = ({ user, edit, setEdit, inputRef }) => {
    return (
        <div className="aboutme__container">
            <div
                className="aboutme__avatar_container"
            >
                {edit && <div role="button" className="upload_photo" onClick={() => edit && inputRef.current.click()}>
                    <svg height="70" width="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.667 49.5833V55.4166C11.667 56.9637 12.2816 58.4475 13.3755 59.5414C14.4695 60.6354 15.9532 61.25 17.5003 61.25H52.5003C54.0474 61.25 55.5311 60.6354 56.6251 59.5414C57.7191 58.4475 58.3337 56.9637 58.3337 55.4166V49.5833" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.417 32.0833L35.0003 46.6666L49.5837 32.0833" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35 11.6667V46.6667" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>}
                {(user.photo) && <img
                    className="aboutme__avatar"
                    src={user.photo}
                    alt="aboutme__avatar"
                />}
            </div>
            <div className="aboutme__info_container">
                <Typography variant="h4" style={{ fontWeight: 700 }}>
                    {user.name}
                    <div
                        className="aboutme_desktop"
                    >
                        {edit && <IconButton
                            onClick={() => setEdit(true)}
                        >
                            <Edit />
                        </IconButton>}
                    </div>
                </Typography>

                <div className="aboutme__info_inner">
                    <PersonLocation />
                    <span>{user.address?.city}</span>
                </div>
                <div className="aboutme__info_inner">
                    <PersonEmail />
                    <span>{user.email}</span>
                </div>
                <div className="aboutme__info_inner">
                    <PersonPhone />
                    <span>{user.phone}</span>
                </div>
                <div className="aboutme__info_inner">
                    <VkIcon />
                    <span>{user.vk}</span>
                </div>
                {edit && <div className="aboutme__info_inner aboutme_mobile">
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={() => setEdit(true)}
                        fullWidth
                    >
                        Редактировать
                    </StyledButton>
                </div>}
            </div>
        </div>
    )
}
