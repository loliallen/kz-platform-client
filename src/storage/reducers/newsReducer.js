import types from "../types"

const initalState = {
    list: [],
    loaded: false,
    current: null
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.NEWS.SET:
            let current = null
            if (action.payload.length > 0)
                current = action.payload[0]
            return { ...state, list: action.payload, loaded: true, current }
        case types.NEWS.SET_CURRENT:
            return { ...state, current: action.payload }
        default:
            return state
    }
}
