import { Avatar, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@material-ui/core'
import React from 'react'

const Comment = ({ id, parent_id, author, text, children, giveAnswer, key}) => (
    <ListItem key={key}>
        <ListItemAvatar>
            <Avatar />
        </ListItemAvatar>
        <ListItemText
            primary={author.name}
            secondary={
                <React.Fragment>
                    <Typography>
                        {text}
                    </Typography>
                    <Link onClick={()=>giveAnswer(id, parent_id, author)}>Ответить</Link>
                </React.Fragment>
            }
        >
        </ListItemText>
        {children.map((child, index) =>
            <Comment key={index} {...child}/>
        )}
    </ListItem>
)

export const CurrentTenderComments = ({comments}) => {
    return (
        <div>
            <div>
                <TextField
                    variant="outlined"
                    color="primary"
                ></TextField>
                <IconButton>

                </IconButton>
            </div>
            <List>
                { comments.map((comment, index) =>
                    <Comment key={index} {...comment}/>
                )}
            </List>
        </div>
    )
}
