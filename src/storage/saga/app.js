import { call, put, select } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import actions from "../actions";
import types from "../types";
import app from "../types/app";
import news from "../types/news";
// import Geocode from "react-geocode"
import { api_key } from "../../utils/mapConfig";

// Geocode.setApiKey(api_key)

const BaseTypes = types.APP
const Service = Api.User

const news_list = [
    {
        time: new Date(),
        new_item: [
            {
                type: "text",
                text: "Lorem impus hi"
            },
            {
                type: "photo",
                text: "https://images.unsplash.com/photo-1616258285065-acc9eb162c42?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                type: "text",
                text: "Жители Пермского края могут принять участие в совершенствовании внесудебной процедуры банкротства - на портале «Управляем вместе» стартовал онлайн-опрос, в котором пользователи могут поделиться мнениями о внесудебной процедуре банкротства физических лиц. К участию приглашаются граждане, на которых рассчитана данная процедура – физические лица с долгами в размере от 50 до 500 тыс. руб., не имеющие возможности их заплатить. "
            },
        ],
        address: "some address"
    },
    {
        time: new Date(),
        new_item: [
            {
                type: "text",
                text: "Lorem impus"
            },
            {
                type: "photo",
                text: "https://images.unsplash.com/photo-1616337900440-056dd0f082d3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                type: "text",
                text: "Жители Пермского края могут принять участие в совершенствовании внесудебной процедуры банкротства - на портале «Управляем вместе» стартовал онлайн-опрос, в котором пользователи могут поделиться мнениями о внесудебной процедуре банкротства физических лиц. К участию приглашаются граждане, на которых рассчитана данная процедура – физические лица с долгами в размере от 50 до 500 тыс. руб., не имеющие возможности их заплатить. "
            },
        ],
        address: "some address"
    },
    {
        time: new Date(),
        new_item: [
            {
                type: "text",
                text: "Lorem impus"
            },
            {
                type: "photo",
                text: "https://images.unsplash.com/photo-1616337900440-056dd0f082d3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                type: "text",
                text: "Жители Пермского края могут принять участие в совершенствовании внесудебной процедуры банкротства - на портале «Управляем вместе» стартовал онлайн-опрос, в котором пользователи могут поделиться мнениями о внесудебной процедуре банкротства физических лиц. К участию приглашаются граждане, на которых рассчитана данная процедура – физические лица с долгами в размере от 50 до 500 тыс. руб., не имеющие возможности их заплатить. "
            },
        ],
        address: "some address"
    },
]

function* LoginWatcher({ payload }) {
    try {
        console.log(payload)
        const _payload = yield call(Service.login, payload)
        console.log(_payload)
        if (_payload.code === 200)
            yield put({ type: BaseTypes.SET_TOKEN, payload: _payload })
    } catch (error) {
        console.error("error")
        yield put({ type: BaseTypes.SET_TOKEN, payload: "offline" })
    }
}


function* SaveEditWatcher({ payload }) {
    try {
        console.log(payload)
        const _payload = yield call(Service.update, payload.token, payload.data)
        console.log("token",payload)
        yield put({ type: BaseTypes.SET_TOKEN, payload: { token: payload.token} })
    } catch (error) {
        console.error(error)
    }
}

function* SetTokenWatcher({ payload }) {
    const token = payload
    console.log(token)
    try {
        const res = yield call(Service.me, token)
        console.log("res",res)
        yield put({ type: BaseTypes.SET_USER, payload: res })
    } catch (error) {
        console.error(error)
    }
}

function* RegisterWatcher({ payload }) {
    try {
        console.log(payload)
        const _payload = yield call(Service.register, payload)
        console.log(_payload)
        yield put({ type: BaseTypes.SET_USER, payload: _payload })
    } catch (error) {
        console.error(error)
    }
}

function* InitWatcher() {
    try {
        console.log("Init watcher")

        const token = yield select(s => s.app.token)
        console.log("token", token)
        if (token)
            yield put({ type: BaseTypes.SET_TOKEN, payload: {token} })
    } catch (error) {
        console.error(error)
    }
}


function* RequestRegionWatcher() {
    try {
        const payload = yield call(Api.Region.get)
        yield put({ type: BaseTypes.SET_REGIONS, payload })
    } catch (error) {
        console.error(error)
    }
}


export default {
    LoginWatcher,
    RegisterWatcher,
    SetTokenWatcher,
    SaveEditWatcher,
    InitWatcher,
    RequestRegionWatcher
}
