import {authMe, login, logout} from "../api/auth";
import {ThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type UsersInitialStateType = {
    userId: '',
    email: null,
    login: null,
    isAuth: boolean,
}

type SetUserDataActionType = {
    type: "AUTH/SET_USER_DATA",
    payload: UsersInitialStateType
}

export type AuthGeneralActionType = SetUserDataActionType | FormAction

export type ProfileInitialStateType = typeof UsersInitialState

const UsersInitialState: UsersInitialStateType = {
    userId: '',
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: ProfileInitialStateType = UsersInitialState, action: AuthGeneralActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
            return {...state, ...action.payload,}
        default:
            return state
    }
}

export const setUserDataAC = (userId: '', email: null, login: null, isAuth: boolean): SetUserDataActionType => ({
    type: "AUTH/SET_USER_DATA", payload: {userId, email, login, isAuth}
}) as const

export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
    let response = await authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let response = await login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = (): ThunkType => async (dispatch) => {
    let response = await logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC('', null, null, false))
    }
}
