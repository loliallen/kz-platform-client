import { Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'

const StyledPaper = withStyles({
    root: {
        borderRadius: "20px",
        backgroundColor: "#F1FAF8",
        marginRight: "40px",
        padding: "30px"
    }
})(Paper)

export const CurrentNew = ({
    time,
    new_item,
    address,
    ...rest
}) => {
    const isNewItemIsArray = Array.isArray(new_item)
    const title = isNewItemIsArray ? new_item.find(p => p.type === "text" ) : new_item

    const new_content = new_item

    if (!new_item)
        return null
    return (
        <StyledPaper
            {...rest}
        >
            <Typography
                variant="h6"
            >
                { title.text }
            </Typography>
            <Typography
                style={{
                    fontSize: "12px",
                    color: "#9C9C9C"
                }}
            >
                { new Date(time).toLocaleDateString() }
            </Typography>
            {isNewItemIsArray ?
                new_content.map(p => {
                    const { type } = p
                    if (type === "text")
                    return <Typography>
                            {p.text}
                        </Typography>
                    return <img src={p.text} alt="photo"/>
                })
                :
                <Typography>
                    -----
                </Typography>
            }
            { }
        </StyledPaper>
    )
}
