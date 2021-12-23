const SET_USER_DATA = "SET_USER_DATA"

export type UsersInitialStateType = {
    userId: null,
    email: null,
    login: null
}
type SetUserDataActionType = {
    type: "SET_USER_DATA",
    data: any
}

type GeneralActionType = SetUserDataActionType

export type ProfileInitialStateType = typeof UsersInitialState

const UsersInitialState: UsersInitialStateType = {
    userId: null,
    email: null,
    login: null
}

export const authReducer = (state: ProfileInitialStateType = UsersInitialState, action: GeneralActionType): ProfileInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setUserDataAC = (userId: null, email: null, login: null): SetUserDataActionType => ({
    type: SET_USER_DATA, data:{userId, email, login}
}) as const
