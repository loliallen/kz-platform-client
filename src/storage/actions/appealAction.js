import appeal from "../types/appeal";

const request = () => ({
    type: appeal.REQUEST
})

const requestMine = (data) => ({
    type: appeal.REQUEST_MINE,
    payload: data
})

const create = (data) => ({
    type: appeal.CREATE,
    payload: data
})

const set = (data) => ({
    type: appeal.SET,
    payload: data
})
const set_current = (data) => ({
    type: appeal.SET_CURRENT,
    payload: data
})

const set_latest = (data) => ({
    type: appeal.SET_LATEST,
    payload: data
})

const set_filter = (field) => ({
    type: appeal.SET_FILTER,
    payload: field
})

export default {
    request,
    requestMine,
    create,
    set_latest,
    set,
    set_filter,
    set_current
}
