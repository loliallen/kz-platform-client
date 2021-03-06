import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.APP
const Service = Api.User

function *LoginWatcher({ payload }){
    try {
        console.log(payload)
        const _payload = yield call(Service.login, payload)
        console.log(_payload)
        yield put({ type: BaseTypes.SET_USER, payload: _payload })
    } catch (error) {
        console.error(error)
    }
}

function *RegisterWatcher({ payload }){
    try {
        console.log(payload)
        const _payload = yield call(Service.register, payload)
        console.log(_payload)
        yield put({ type: BaseTypes.SET_USER, payload: _payload })
    } catch (error) {
        console.error(error)
    }
}

export default {
    LoginWatcher,
    RegisterWatcher
}