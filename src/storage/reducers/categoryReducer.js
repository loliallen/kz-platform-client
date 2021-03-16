import types from "../types"


const initialState = {
    list: [],
    loaded: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.CATEGORY.SET:
            return {... state, list: action.payload, loaded: true}
        default:
            return state
    }
}
