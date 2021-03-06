import { combineReducers } from "redux"

import appealReducer from "./appealReducer"
import appReducer from "./appReducer"


export const combinedReducers = combineReducers({
    app: appReducer,
    appeal: appealReducer
})