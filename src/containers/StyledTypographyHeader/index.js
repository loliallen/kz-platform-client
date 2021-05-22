import { Typography } from '@material-ui/core'
import { Link } from "react-router-dom"

export const StyledTypographyHeader = ({ title, linkLabel, link, light = true }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "40px"
            }}
        >
            <Typography
                variant="h6"
                style={{
                    color: light ? "#ADADAD" : "#000000",
                    fontWeight: "bold",
                    fontSize: 32
                }}
            >
                {title}
            </Typography>
            {link && <Link className="link"
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
