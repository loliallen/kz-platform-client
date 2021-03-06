import types from "../types"

const initalState = {
    inited: false,
    isAuthed: false,
    token: ""
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.APP.SET_USER:
            return { ...state, isAuthed: true, token: action.payload.token}
        default:
            return state
    }
}