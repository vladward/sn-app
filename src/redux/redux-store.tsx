import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {UsersGeneralActionType, usersReducer} from "./usersReducer";
import {AuthGeneralActionType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType = AuthGeneralActionType | DialogsActionType | ProfileActionType | UsersGeneralActionType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))