import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.TENDER
const Service = Api.Tender

function* requestWatcher(){
    try {
        const res = yield call(Service.get)
        console.log(res)
        yield put({type: BaseTypes.SET, payload: res })
    } catch (e) {
        console.error(e)
    }
}


function* addCommentWatcher({ payload }){
    try {
        const res = yield call(Service.commentAdd, payload.id, payload.text, payload.parent, payload.token)
        yield put({type: BaseTypes.REQUEST })
    } catch (e) {
        console.error(e)
    }
}

export default {
    requestWatcher,
    addCommentWatcher
}
