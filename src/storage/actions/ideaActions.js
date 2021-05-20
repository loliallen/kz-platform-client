import idea from "../types/ideas";

const request = () => ({
    type: idea.REQUEST
})

const requestMine = (data) => ({
    type: idea.REQUEST_MINE,
    payload: data
})

const create = (data) => ({
    type: idea.CREATE,
    payload: data
})

const set = (data) => ({
    type: idea.SET,
    payload: data
})

const set_latest = (data) => ({
    type: idea.SET_LATEST,
    payload: data
})

const set_filter = (field) => ({
    type: idea.SET_FILTER,
    payload: field
})

export default {
    request,
    requestMine,
    create,
    set_latest,
    set,
    set_filter
}
