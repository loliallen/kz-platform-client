import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.IDEA
const Service = Api.Idea

function* requestWatcher(){
    try {
        const res = yield call(Service.get)
        yield put({type: BaseTypes.SET, payload: res })
    } catch (e) {
        console.error(e)
    }
}

function* createWatcher({ payload: data }) {
    try {
        const payload = yield call(Service.create, data)
        yield put({ type: BaseTypes.REQUEST })
    } catch (E){
        yield put({ type: BaseTypes.REQUEST })
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
    addCommentWatcher,
    createWatcher
}
