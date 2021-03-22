import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.NEWS
const Service = Api.News


function *GetWatcher() {
    try {
        const payload = yield call(Service.get)
        yield put({ type: BaseTypes.SET, payload: payload.news })
    } catch (error){
        console.log(error)
    }
}
export default {
    GetWatcher
}
