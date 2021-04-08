import types from "../types"


const initialState = {
    list: [],
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

export default (state = initialState, action) => {
    switch(action.type) {
        case types.APPEAL.SET:
            if (action.payload.code === 200) {
                const list = action.payload.appealinfo.map(e => {
                    return {
                        id: e.id,
                        coords: {
                            lat: e.address.latitude,
                            lng: e.address.longitude,
                        },
                        category: {
                            title: e.category.name,
                            id: e.category.id
                        },
                        comment: e.comment,
                        comments: e.comments,
                        status: Number(e.status),
                        organId: e.organId,
                        date: e.date,
                        photos: e.photo,
                        user: e.user
                    }
                })
                const total = list.length
                const idle = list.filter(e => e.status === 0).length
                const on_review = list.filter(e => e.status >= 1 && e.status < 5).length
                const answered = list.filter(e => e.status === 5).length

                return {... state, list, loaded: true, counters: { total, idle, on_review, answered }}
            }
                return state
        case types.APPEAL.SET_LATEST:
            return {... state, latest: action.payload }

        case types.APPEAL.SET_MINE:
            return {...state, mine: action.payload}
        default:
            return state
    }
}
