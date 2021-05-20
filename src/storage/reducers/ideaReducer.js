import types from "../types"


const initialState = {
    list: [],
    plist: [],
    mine: [],
    latest: null,
    loaded: false,
    counters: {
        total: 0,
        idle: 0,
        on_review: 0,
        answered: 0
    }
}

/*
author: Object { id: "2", name: "name", email: "email@", … }
address: null​​​​
email: "email@"
​​​id: "2"
​​​​name: "name"
​​​​phone: "phone"
​​​​photo: null
​​​​status: "2"
​​​​vk: null
​​​​<prototype>: Object { … }
​​​
id: "1"
​​​
photos: Array []
​​​
status: "0"
​​​
text: null
​​​
time: "2021-03-27 17:09:31"
​​​
title: "\"idea title\""
​​​
user_id: "2"
*/

export default (state = initialState, action) => {
    switch(action.type) {
        case types.IDEA.SET:
            if (action.payload.code === 200) {
                const list = action.payload.ideas.map(idea => {
                    return {
                        date: new Date(idea.time),
                        title: idea.title,
                        content: idea.text,
                        user: idea.author
                    }
                })
                const total = list.length
                const idle = list.filter(e => e.status === 0).length
                const on_review = list.filter(e => e.status >= 1 && e.status < 5).length
                const answered = list.filter(e => e.status === 5).length

                return {... state, list, plist: list, loaded: true, counters: { total, idle, on_review, answered }}
            }
                return state
        case types.IDEA.SET_LATEST:
            return {... state, latest: action.payload }

        case types.IDEA.SET_MINE:
            return {...state, mine: action.payload}
        // case types.IDEA.SET_FILTER:
        //     const filter_field = action.payload
        //     if (filter_field === "total")
        //         return { ...state, list: state.plist }
        //     if (filter_field === "idle")
        //         return { ...state, list: state.plist.filter(e => e.status === 0) }
        //     if (filter_field === "on_review")
        //         return { ...state, list: state.plist.filter(e => e.status >= 1 && e.status < 5) }
        //     if (filter_field === "answered")
        //         return { ...state, list: state.plist.filter(e => e.status === 5) }

        default:
            return state
    }
}
