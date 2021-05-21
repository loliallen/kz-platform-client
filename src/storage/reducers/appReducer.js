import types from "../types"

const initalState = {
    inited: false,
    isAuthed: false,
    rawRegion: "",
    regionId: localStorage.getItem("region_id") || null,
    regions: [],
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
            localStorage.setItem("region_id", action.payload)
            return { ...state, regionId: action.payload}
        case types.APP.SET_POSITION:
            return { ...state, position: action.payload}
        case types.APP.SET_REGIONS:
            if (action.payload.code == 200)
                return { ...state, regions: action.payload.data}
            return state
        case types.APP.LOGOUNT:
            localStorage.removeItem('token')
            return { ...state, isAuthed: false, token: "", user: null}
        default:
            return state
    }
}
