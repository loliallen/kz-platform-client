import types from "../types";

const get = () => ({
    type: types.NEWS.REQUEST
})

const get_local = regionId => ({
    type: types.NEWS.REQUEST_LOCAL,
    payload: regionId
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
    set_current,
    get_local
}
