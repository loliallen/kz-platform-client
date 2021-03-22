import { Typography } from '@material-ui/core'
import { Link } from "react-router-dom"

export const StyledTypographyHeader = ({ title, linkLabel, link }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "40px"
            }}
        >
            <Typography
                variant="h5"
                style={{
                    color: "#ADADAD",
                    fontWeight: "700"
                }}
            >
                {title}
            </Typography>
            {link && <Link
                style={{
                    color: "#2F80ED",
                    alignItems: "center",
                    display: "flex"
                }}
                to={link}
            >{linkLabel}</Link>}
        </div>
    )
}
