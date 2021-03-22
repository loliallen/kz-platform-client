import { SvgIcon } from '@material-ui/core'


export const ArrowUpIcon = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 32 32"
            {...props}
            style={{ fill: "transparent", ...props.style }}
        >
            <path d="M16 25.3333V6.66668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6667 12L16 6.66667" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.3335 12L16.0002 6.66667" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </SvgIcon>
    )
}
