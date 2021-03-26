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
            console.log("payload", action.payload)
            return { ...state, user: action.payload?.userinfo}
        default:
            return state
    }
}
