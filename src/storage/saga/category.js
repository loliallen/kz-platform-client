import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.CATEGORY
const Service = Api.Category


function *GetWatcher() {
    try {
        const payload = yield call(Service.get)
        yield put({ type: BaseTypes.SET, payload: payload.categories })
    } catch {
        yield put({ type: BaseTypes.SET, payload: [] })
    }
}
export default {
    GetWatcher
}
