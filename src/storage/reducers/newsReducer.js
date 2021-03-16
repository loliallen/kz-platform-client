import types from "../types"

const initalState = {
    list: [],
    loaded: false,
    current: null
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.NEWS.SET:
            return { ...state, list: action.payload, loaded: true }
        case types.NEWS.SET_CURRENT:
            return { ...state, current: action.payload }
        default:
            return state
    }
}