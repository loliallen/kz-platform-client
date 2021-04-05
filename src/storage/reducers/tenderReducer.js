import types from "../types"

const initalState = {
    list: [],
    loaded: false,
    current: null
}

export default (state = initalState, action) => {
    switch (action.type){
        case types.TENDER.SET:
            if (action.payload.code === 200)
                return { ...state, list: action.payload.tenders, loaded: true }
            console.log("error")
        case types.TENDER.SET_CURRENT:
            return { ...state, current: action.payload }
        default:
            return state
    }
}
