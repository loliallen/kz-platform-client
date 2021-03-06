import app from "../types/app";

const login = ({
    login,
    password
}) => ({
    type: app.LOGIN,
    payload: {
        login,
        password
    }
})

const register = ({
    login,
    password
}) => ({
    type: app.REGISTER,
    payload: {
        login,
        password
    }
})

const saveEdits = (data) => ({
    type: app.SAVE_EDITS,
    payload: data
})

const setRawRegion = (data) => ({
    type: app.SET_RAW_REGION,
    payload: data
})

const setRegionId = (id) => ({
    type: app.SET_REGION_ID,
    payload: id
})
const requestRegions = (id) => ({
    type: app.REQUEST_REGION,
    payload: id
})
const setPosition = (pos) => ({
    type: app.SET_POSITION,
    payload: pos
})
const init = (pos) => ({
    type: app.INIT,
    payload: pos
})

const logout = () => ({
    type: app.LOGOUT
})

const getUserInfo = (id) => ({
    type: app.REQUEST_USER,
    payload: id
})

export default {
    loginAction: login,
    register,
    saveEdits,
    setRawRegion,
    setRegionId,
    setPosition,
    init,
    requestRegions,
    logout,
    getUserInfo
}
