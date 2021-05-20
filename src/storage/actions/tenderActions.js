import types from "../types/";

const request = () => ({
    type: types.TENDER.REQUEST
})
const set = (data) => ({
    type: types.TENDER.SET,
    payload: data
})
const set_current = (data) => ({
    type: types.TENDER.SET_CURRENT,
    payload: data
})
const add_comment = (data) => ({
    type: types.TENDER.ADD_COMMENT,
    payload: data
})

const vote = (id, isUpvote=true) => ({
    type: types.TENDER.ADD_COMMENT,
    payload: { id, isUpvote }
})

export default {
    request,
    set,
    set_current,
    add_comment,
    vote
}
