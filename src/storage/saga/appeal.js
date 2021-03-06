import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.APPEAL
const Service = Api.Appeal


function *GetWatcher() {
    try {
        const payload = yield call(Service.Get)
        yield put({ type: BaseTypes.SET, payload })
    } catch {
        yield put({ type: BaseTypes.SET, payload: [] })
    }
}
export default {
    GetWatcher
}