import types from "../types"

const initalState = {
    inited: false,
    isAuthed: false,
    rawRegion: "",
    regionId: null,
    position: null,
    token: localStorage.getItem("token") || "",
    user: null
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.APP.SET_TOKEN:
            localStorage.setItem("token", action.payload.token)
            return { ...state, isAuthed: true, token: action.payload.token}
        case types.APP.SET_USER:
            console.log("payload", action.payload)
            return { ...state, user: action.payload?.userinfo}
        case types.APP.SET_RAW_REGION:
            return { ...state, rawRegion: action.payload}
        case types.APP.SET_REGION_ID:
            return { ...state, regionId: action.payload}
        case types.APP.SET_POSITION:
            return { ...state, position: action.payload}
        default:
            return state
    }
}
