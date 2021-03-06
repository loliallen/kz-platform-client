import { combineReducers } from "redux"

import appealReducer from "./appealReducer"
import appReducer from "./appReducer"
import newsReducer from "./newsReducer"
import categoryReducer from "./categoryReducer"
import tenderReducer from "./tenderReducer"
import ideaReducer from "./ideaReducer"


export const combinedReducers = combineReducers({
    app: appReducer,
    appeal: appealReducer,
    news: newsReducer,
    category: categoryReducer,
    tender: tenderReducer,
    idea: ideaReducer
})
