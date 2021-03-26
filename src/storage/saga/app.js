import { call, put } from "@redux-saga/core/effects";
import Api from "../../service/Api";
import types from "../types";
import app from "../types/app";
import news from "../types/news";

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

function* SetTokenWatcher({ payload }) {
    const token = payload
    try {
        // const data = {
        //     name: "Ivan Ivanov Ivanovich",
        //     address: {
        //         city: "Земля",
        //         full: "Млечный путь, Солнечная система, Планета Земля"
        //     },
        //     phone: "+7 (999) 999 99 99",
        //     email: "fakemail@fake.fff",
        //     image: "https://images.unsplash.com/photo-1589155629431-f2fe9a9efc08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdmlkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        // }
        // if (token === "offline") {
        //     yield put({ type: BaseTypes.SET_USER, payload: data })
        //     yield put({ type: news.SET, payload: news_list})
        // } else {
        const res = yield call(Service.me, token)
        console.log("res",res)
        yield put({ type: BaseTypes.SET_USER, payload: res })
        // }
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

export default {
    LoginWatcher,
    RegisterWatcher,
    SetTokenWatcher
}
