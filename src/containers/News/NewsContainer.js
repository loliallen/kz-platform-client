import { Divider, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const New = ({ time, new_item, address, onClick }) => {

    const isNewItemIsArray = Array.isArray(new_item)
    const title = isNewItemIsArray ? new_item.find(p => p.type === "text") : new_item

    return (
        <>
            <ListItem
                onClick={onClick}
                button
            >
                <ListItemText
                    primaryTypographyProps={{
                        style: {
                            color: "#9C9C9C",
                            fontSize: "12px"
                        }
                    }}
                    secondaryTypographyProps={{
                        style: {
                            color: "black",
                            fontSize: "16px"
                        }
                    }}
                    secondary={title?.text}
                    primary={new Date(time).toLocaleDateString()}
                />
            </ListItem>
            <Divider />
        </>
    )
}
export const NewsContainer = ({
    news,
    onSelect
}) => {
    return (
        <List>
            {news.map((n, i) => <New onClick={()=>onSelect(n)} key={i} {...n} />)}
        </List>
    )
}