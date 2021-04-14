import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.TENDER
const Service = Api.Tender

function* requestWatcher({ payload }){
    try {
        const res = yield call(Service.get, payload)
        console.log(res)
        if (payload)
            yield put({type: BaseTypes.SET_CURRENT, payload: res.tenders[0] })
        else
            yield put({type: BaseTypes.SET, payload: res })
    } catch (e) {
        console.error(e)
    }
}


function* addCommentWatcher({ payload }){
    try {
        const res = yield call(Service.commentAdd, payload.id, payload.text, payload.parent_id, payload.token)
        yield put({type: BaseTypes.REQUEST, payload: payload.id })
    } catch (e) {
        console.error(e)
    }
}

export default {
    requestWatcher,
    addCommentWatcher
}
