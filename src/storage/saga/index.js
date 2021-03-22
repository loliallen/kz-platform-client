import { takeEvery } from "redux-saga/effects"

import types from "../types"
import appeal from "../saga/appeal"
import app from "../saga/app"
import news from "../saga/news"
import category from "../saga/category"

export function *SagaWatcher(){
    yield takeEvery(types.APPEAL.REQUEST, appeal.GetWatcher)
    yield takeEvery(types.NEWS.REQUEST, news.GetWatcher)
    yield takeEvery(types.CATEGORY.REQUEST, category.GetWatcher)
    yield takeEvery(types.APPEAL.CREATE, appeal.CreateWatcher)


    yield takeEvery(types.APP.LOGIN, app.LoginWatcher)
    yield takeEvery(types.APP.REGISTER, app.RegisterWatcher)
    yield takeEvery(types.APP.SET_TOKEN, app.SetTokenWatcher)
}

