import types from "../types"


const initialState = {
    list: [],
    plist: [],
    mine: [],
    current_user_mine: [],
    latest: null,
    current: null,
    loaded: false,
    counters: {
        total: 0,
        idle: 0,
        on_review: 0,
        answered: 0
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

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
                            title: e.category?.name || "-----",
                            id: e.category?.id || "-----"
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

                return { ...state, list, plist: list, loaded: true, counters: { total, idle, on_review, answered } }
            }
            return state
        case types.APPEAL.SET_USER_MINE:
            if (action.payload.code === 200) {
                const list = action.payload.appealinfo.map(e => {
                    return {
                        id: e.id,
                        coords: {
                            lat: e.address?.latitude,
                            lng: e.address?.longitude,
                        },
                        category: {
                            title: e.category?.name || "-----",
                            id: e.category?.id || "-----"
                        },
                        comment: e.comment,
                        comments: e.comments,
                        status: Number(e.status),
                        organId: e.organId,
                        date: e.date,
                        photos: e.photo
                    }
                })
                console.log(list)

                return { ...state, current_user_mine: list }
            } else
                return state
        case types.APPEAL.SET_LATEST:
            return { ...state, latest: action.payload }

        case types.APPEAL.SET_CURRENT:
            return { ...state, current: action.payload }

        case types.APPEAL.SET_MINE:
            const list = action.payload.map(e => {
                return {
                    id: e.id,
                    coords: {
                        lat: e.address.latitude,
                        lng: e.address.longitude,
                    },
                    category: {
                        title: e.category?.name,
                        id: e.category?.id
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
            return { ...state, mine: list }
        case types.APPEAL.SET_FILTER:
            const filter_field = action.payload
            if (filter_field === "total")
                return { ...state, list: state.plist }
            if (filter_field === "idle")
                return { ...state, list: state.plist.filter(e => e.status === 0) }
            if (filter_field === "on_review")
                return { ...state, list: state.plist.filter(e => e.status >= 1 && e.status < 5) }
            if (filter_field === "answered")
                return { ...state, list: state.plist.filter(e => e.status === 5) }

        default:
            return state
    }
}
