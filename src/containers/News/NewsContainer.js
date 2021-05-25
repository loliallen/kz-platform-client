import { Divider, FormControl, FormLabel, InputLabel, List, ListItem, ListItemText, MenuItem, Select, withStyles } from '@material-ui/core'
import React from 'react'

const StyledListItemText = withStyles({
    root: {
        padding: "0px"
    },
    multiline: {
        margin: "0px"
    }
})(ListItemText)

const StyledListItem = withStyles({
    gutters: {
        padding: "0px"
    }
})(ListItem)

const New = ({ title, time, new_item, address, onClick }) => {

    return (
        <>
            <StyledListItem
                onClick={onClick}
                button
            >
                <StyledListItemText
                    primaryTypographyProps={{
                        style: {
                            color: "#9C9C9C",
                            fontSize: "12px",
                            marginBottom: 15
                        }
                    }}
                    secondaryTypographyProps={{
                        style: {
                            color: "black",
                            fontSize: "16px",
                            marginBottom: 12,
                            fontWeight: 550
                        }
                    }}
                    secondary={title || "Заголовок новости"}
                    primary={new Date(time).toLocaleDateString()}
                />
            </StyledListItem>
            <Divider />
        </>
    )
}
export const NewsContainer = ({
    news,
    onSelect,
    ...rest
}) => {
    return (
        <List
            {...rest}
        >
            {news.map((n, i) => <New onClick={() => onSelect(n)} key={i} {...n} />)}
        </List>
    )
}
