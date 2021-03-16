import types from "../types"


const initialState = {
    list: [],
    latest: null,
    loaded: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.APPEAL.SET:
            return {... state, list: action.payload, loaded: true}
        case types.APPEAL.SET_LATEST:
            return {... state, latest: action.payload }
        default:
            return state
    }
}
