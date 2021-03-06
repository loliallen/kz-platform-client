import { takeEvery } from "redux-saga/effects"

import types from "../types"
import appeal from "../saga/appeal"
import app from "../saga/app"

export function *SagaWatcher(){
    yield takeEvery(types.APPEAL.REQUEST, appeal.GetWatcher)
    yield takeEvery(types.APP.LOGIN, app.LoginWatcher)
    yield takeEvery(types.APP.REGISTER, app.RegisterWatcher)
}

