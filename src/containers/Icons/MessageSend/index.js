import React from 'react'
import { StyledIcon } from '../../StyledIcon'


export const MessageSendIcon = (props) => {
    return (
        <StyledIcon
            viewBox="0 0 40 40"
            {...props}
        >
            <path d="M20 30H8.33333C7.44928 30 6.60143 29.6488 5.97631 29.0237C5.35119 28.3986 5 27.5507 5 26.6667V9.99999C5 9.11593 5.35119 8.26809 5.97631 7.64297C6.60143 7.01785 7.44928 6.66666 8.33333 6.66666H31.6667C32.5507 6.66666 33.3986 7.01785 34.0237 7.64297C34.6488 8.26809 35 9.11593 35 9.99999V22.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 10L20 20L35 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 30H35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 25L35 30L30 35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </StyledIcon>
    )
}
