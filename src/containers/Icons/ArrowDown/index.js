import { SvgIcon } from '@material-ui/core'


export const ArrowDownIcon = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 32 32"
            {...props}
            style={{ fill: "transparent", ...props.style }}
        >
            <path d="M16 6.66666V25.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.3333 20L16 25.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6665 20L15.9998 25.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    )
}
