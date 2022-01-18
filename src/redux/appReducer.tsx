import {authMe, login, logout} from "../api/auth";
import {ThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserDataTC} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type UsersInitialStateType = {
    initialized: boolean,
}

type SetInitializedDataActionType = {
    type: "INITIALIZED_SUCCESS",
}

export type AppGeneralActionType = SetInitializedDataActionType | FormAction

const AppInitialState: UsersInitialStateType = {
    initialized: false,
}

export const appReducer = (state: UsersInitialStateType = AppInitialState, action: AppGeneralActionType): UsersInitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = (): SetInitializedDataActionType => ({type: INITIALIZED_SUCCESS}) as const

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })

}