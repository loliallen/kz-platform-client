import { Avatar, Collapse, IconButton, InputAdornment, Link, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tenderActions from '../../storage/actions/tenderActions'
import { SendCommentIcon } from '../Icons/SendComment'
import "./CurrentTenderComments.css"


const NestedList = withStyles(t => ({
    root: {
        paddingLeft: t.spacing(4)
    }
}))(List)

const Comment = ({ id, parent_author, author, text, children, giveAnswer, created_at, showAnswerLink, ...rest }) => (
    <>
        <ListItem>
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText
                primary={author.name}
                secondary={
                    <React.Fragment>
                        <Typography>
                            {parent_author ?
                                `${parent_author.name}, ${text}`
                                :
                                text
                            }
                        </Typography>
                        <span>{created_at} {showAnswerLink && <Link className="link" onClick={() => giveAnswer(id, author)}>Ответить</Link>}</span>
                    </React.Fragment>
                }
            >
            </ListItemText>
        </ListItem>

        {children && <Collapse in={true} unmountOnExit>
            <NestedList>
                {children.map((child, index) =>
                    <Comment key={index} {...child} parent_author={author} showAnswerLink={showAnswerLink} />
                )}
            </NestedList>
        </Collapse>}
    </>
)

export const CurrentTenderComments = ({ id, comments, token, isAuthed }) => {
    const dispatch = useDispatch()
    const [commentAuthor, setCommentAuthor] = useState(null)
    const [commentId, setCommentId] = useState(null)
    const [commentText, setCommentText] = useState()

    const showAnswerLink = isAuthed

    const giveAnswer = (id, author) => {
        setCommentAuthor(author)
        setCommentId(id)
    }
    const handleChangeCommentText = e => {
        let value = e.target.value
        setCommentText(value)
    }
    const handleRemoveCommentAuthor = () => {
        setCommentAuthor(null)
        setCommentId(null)
    }
    const handleClear = () => {
        handleRemoveCommentAuthor()
        setCommentText("")
    }

    const handleSubmitComment = () => {
        let data = {
            text: commentText,
            token: token,
            id: id
        }
        if (commentId)
            data.parent_id = commentId
        // dispatch(tendetActions.addComment(data))
        dispatch(tenderActions.add_comment(data))
    }

    const isMobile = window.width <= 800

    return (
        <div>
            <div style={{ display: "flex", alignItems: isMobile ? "end" : "center" }}>
                {showAnswerLink && <>
                    <TextField
                        variant="outlined"
                        color="primary"
                        fullWidth
                        label="Напишите свой комментарий"
                        multiline
                        InputProps={{
                            startAdornment: <InputAdornment onClick={handleRemoveCommentAuthor} position="start">{commentAuthor && `@${commentAuthor.name},`}</InputAdornment>
                        }}
                        value={commentText}
                        onChange={handleChangeCommentText}
                        onKeyDown={e => {
                            if (e.key === "Backspace" && e.target.value.length === 0) {
                                handleRemoveCommentAuthor()
                            }
                        }}
                    ></TextField>
                    <div>
                        <IconButton
                            onClick={handleSubmitComment}
                        >
                            <SendCommentIcon style={{ fill: "transparent", width: 46, height: 46 }} />
                        </IconButton>
                    </div>
                </>
                }
            </div>
            <div>
                <List>
                    {comments.map((comment, index) =>
                        <Comment key={index} {...comment} giveAnswer={giveAnswer} showAnswerLink={showAnswerLink} />
                    )}
                </List>
            </div>
        </div>
    )
}
