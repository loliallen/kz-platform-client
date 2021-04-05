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

export default {
    loginAction: login,
    register,
    saveEdits
}
