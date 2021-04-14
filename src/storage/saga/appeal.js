import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";

const BaseTypes = types.APPEAL
const Service = Api.Appeal


function *GetWatcher() {
    try {
        const payload = yield call(Service.Get)
        yield put({ type: BaseTypes.SET, payload })
    } catch (error){
        console.error(error)
    }
}

function *GetMineWatcher({payload: data}) {
    try {
        const payload = yield call(Service.GetMine, data)
        yield put({ type: BaseTypes.SET, payload })
    } catch {
        yield put({ type: BaseTypes.SET, payload: [] })
    }
}

function *CreateWatcher({ payload: data }) {
    try {
        data.latlng = data.loc
        data.loc = null
        data.photos = []
        data.anonim = !Boolean(data.token)
        const payload = yield call(Service.Create, data)
        yield put({ type: BaseTypes.SET_LATEST, payload: data })
    } catch {
        yield put({ type: BaseTypes.SET, payload: [] })
    }
}


export default {
    GetWatcher,
    CreateWatcher,
    GetMineWatcher
}
