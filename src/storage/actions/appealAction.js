import appeal from "../types/appeal";

const request = () => ({
    type: appeal.REQUEST
})

const create = (data) => ({
    type: appeal.CREATE,
    payload: data
})

const set = (data) => ({
    type: appeal.SET,
    payload: data
})

const set_latest = (data) => ({
    type: appeal.SET_LATEST,
    payload: data
})

export default {
    request,
    create,
    set_latest,
    set
}
