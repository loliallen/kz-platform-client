import types from "../types"

const initalState = {
    list: [],
    local: [],
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
            break
        case types.NEWS.SET_LOCAL:
            let c = null
            if (action.payload.length > 0)
                c = action.payload[0]
            return { ...state, local: action.payload, loaded: true, current: c }

        case types.NEWS.SET_CURRENT:
            return { ...state, current: action.payload }
        default:
            return state
    }
}
