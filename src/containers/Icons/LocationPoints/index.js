import React from 'react'
import { StyledIcon } from '../../StyledIcon'

import PointBlack from "../../../svgs/filters/PointBlack.svg"
import PointYellow from "../../../svgs/filters/PointYellow.svg"
import PointRed from "../../../svgs/filters/PointRed.svg"
import PointGreen from "../../../svgs/filters/PointGreen.svg"
import { Icon, SvgIcon } from '@material-ui/core'


export const PointIdleIcon = (props) => {
    return (
        <Icon
            {...props}
        >
            <img
                src={PointRed}
            />
        </Icon>
    )
}

export const PointOnReviewIcon = (props) => {
    return (
        <Icon
            {...props}
        >
            <img
                src={PointYellow}
            />
        </Icon>
    )
}

export const PointAnsweredIcon = (props) => {
    return (
        <Icon
            {...props}
        >
            <img
                src={PointGreen}
            />
        </Icon>
    )
}

export const PointTotalIcon = (props) => {
    return (
        <Icon
            {...props}
        >
            <img
                src={PointBlack}
            />
        </Icon>
    )
}
