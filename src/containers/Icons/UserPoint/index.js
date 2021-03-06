import { SvgIcon } from '@material-ui/core'
import React from 'react'

export const UserPoint = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 60 65"
            {...props}
        >
            <g filter="url(#filter0_d)">
                <path d="M40.3708 32.5378L32.592 40.3166C31.9045 41.0035 30.9724 41.3893 30.0006 41.3893C29.0288 41.3893 28.0967 41.0035 27.4092 40.3166L19.6285 32.5378C17.5774 30.4866 16.1806 27.8732 15.6148 25.0282C15.0489 22.1832 15.3394 19.2342 16.4495 16.5543C17.5596 13.8744 19.4395 11.5838 21.8514 9.97221C24.2633 8.36065 27.0989 7.50049 29.9997 7.50049C32.9004 7.50049 35.7361 8.36065 38.148 9.97221C40.5599 11.5838 42.4397 13.8744 43.5498 16.5543C44.66 19.2342 44.9504 22.1832 44.3846 25.0282C43.8187 27.8732 42.4219 30.4866 40.3708 32.5378Z" fill="#2F80ED" />
                <path d="M30 27.6666C33.0376 27.6666 35.5 25.2042 35.5 22.1666C35.5 19.1291 33.0376 16.6666 30 16.6666C26.9624 16.6666 24.5 19.1291 24.5 22.1666C24.5 25.2042 26.9624 27.6666 30 27.6666Z" stroke="#F2F2F2" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d" x="-7" y="-5" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </SvgIcon>
    )
}
