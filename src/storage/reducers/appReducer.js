import types from "../types"

const initalState = {
    inited: false,
    isAuthed: false,
    token: "",
    user: null
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.APP.SET_TOKEN:
            return { ...state, isAuthed: true, token: action.payload.token}
        case types.APP.SET_USER:
            return { ...state, user: action.payload}
        default:
            return state
    }
}
