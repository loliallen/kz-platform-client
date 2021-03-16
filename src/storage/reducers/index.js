import { combineReducers } from "redux"

import appealReducer from "./appealReducer"
import appReducer from "./appReducer"
import newsReducer from "./newsReducer"
import categoryReducer from "./categoryReducer"


export const combinedReducers = combineReducers({
    app: appReducer,
    appeal: appealReducer,
    news: newsReducer,
    category: categoryReducer
})
