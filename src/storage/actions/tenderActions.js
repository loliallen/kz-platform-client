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

export default {
    request,
    set,
    set_current
}
