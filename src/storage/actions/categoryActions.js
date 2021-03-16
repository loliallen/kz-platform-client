import types from "../types/";

const request = () => ({
    type: types.CATEGORY.REQUEST
})
const set = (data) => ({
    type: types.CATEGORY.SET,
    payload: data
})

export default {
    request,
    set
}
