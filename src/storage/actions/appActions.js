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

export default {
    loginAction: login,
    register
}