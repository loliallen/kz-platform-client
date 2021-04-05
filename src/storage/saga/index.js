import { takeEvery } from "redux-saga/effects"

import types from "../types"
import appeal from "../saga/appeal"
import app from "../saga/app"
import news from "../saga/news"
import category from "../saga/category"
import tender from "./tender"

export function *SagaWatcher(){
    yield takeEvery(types.APPEAL.REQUEST, appeal.GetWatcher)
    yield takeEvery(types.APPEAL.REQUEST_MINE, appeal.GetMineWatcher)
    yield takeEvery(types.NEWS.REQUEST, news.GetWatcher)
    yield takeEvery(types.CATEGORY.REQUEST, category.GetWatcher)
    yield takeEvery(types.TENDER.REQUEST, tender.requestWatcher)

    yield takeEvery(types.APPEAL.CREATE, appeal.CreateWatcher)


    yield takeEvery(types.APP.LOGIN, app.LoginWatcher)
    yield takeEvery(types.APP.SAVE_EDITS, app.SaveEditWatcher)
    yield takeEvery(types.APP.REGISTER, app.RegisterWatcher)
    yield takeEvery(types.APP.SET_TOKEN, app.SetTokenWatcher)
}

