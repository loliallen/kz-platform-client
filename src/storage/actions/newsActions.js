import types from "../types";

const get = () => ({
    type: types.NEWS.REQUEST
})


const set = (data) => ({
    type: types.NEWS.SET,
    payload: data
})

const set_current = (data) => ({
    type: types.NEWS.SET_CURRENT,
    payload: data
})

export default {
    get,
    set,
    set_current
}