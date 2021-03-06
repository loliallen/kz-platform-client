import { SvgIcon, withStyles } from '@material-ui/core'

export const StyledIcon = withStyles({
    root: {
        fill: "var(--icon-fill-color)",
        stroke: "var(--icon-stroke-color)",
        transition: "all 500ms ease"
    },
})(SvgIcon)