import { Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import "./style.css"

const StyledPaper = withStyles({
    root: {
        borderRadius: "20px",
        backgroundColor: "#F1FAF8",
        padding: "30px"
    }
})(Paper)

export const CurrentNew = ({
    title,
    time,
    new_item,
    address,
    ...rest
}) => {

    const new_content = new_item

    if (!new_item)
        return null
    return (
        <StyledPaper
            {...rest}
        >
            <Typography
                variant="h5"
                style={{ fontWeight: 550, lineHeight: "31.2px", marginBottom: "10px" }}
            >
                { title || "Заголовок новости" }
            </Typography>
            <Typography
                style={{
                    fontSize: "12px",
                    color: "#9C9C9C",
                    marginBottom: "15px"
                }}
            >
                { new Date(time).toLocaleDateString() }
            </Typography>
            {new_content.map((p, i) => {
                const { type } = p
                if (type === "text")
                return <Typography key={i} style={{ fontWeight: 500}}>
                        {p.text}
                    </Typography>
                return <div className="new_photo" key={i}><img src={p.url_photo} alt="photo"/></div>
            })}
        </StyledPaper>
    )
}
