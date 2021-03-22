import types from "../types"


const initialState = {
    list: [],
    latest: null,
    loaded: false
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
                        status: e.status,
                        organId: e.organId,
                        date: e.date,
                        photos: e.photo,
                        user: e.user
                    }
                })

                return {... state, list, loaded: true}
            }
                return state
        case types.APPEAL.SET_LATEST:
            return {... state, latest: action.payload }
        default:
            return state
    }
}
