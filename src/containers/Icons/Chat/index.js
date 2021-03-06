import React from 'react'
import { StyledIcon } from '../../StyledIcon'

export const ChatIcon = (props) => {
    return (
        <StyledIcon
            viewBox="0 0 40 40" 
            {...props}
        >
            <path d="M5 33.3333L7.16667 26.8333C5.29407 24.0638
                    4.61666 20.784 5.26036 17.6038C5.90407 14.4236
                    7.8251 11.5594 10.6663 9.54378C13.5075 7.52812
                    17.0754 6.49815 20.7068 6.64539C24.3382 6.79263
                    27.7859 8.10705 30.4088 10.3443C33.0317 12.5815
                    34.6515 15.5892 34.9668 18.8083C35.2821 22.0274
                    34.2716 25.2387 32.1231 27.8452C29.9746 30.4517
                    26.8344 32.276 23.2863 32.9789C19.7382 33.6818
                    16.0237 33.2155 12.8333 31.6667L5 33.3333"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 20V20.0125" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3333 20V20.0125" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.6667 20V20.0125" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </StyledIcon>
    )
}
