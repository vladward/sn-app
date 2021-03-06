import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {getProfile, getStatus, setPhoto, updateStatus} from "../api/profile";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTOS_SUCCESS = 'SAVE_PHOTOS_SUCCESS'

export type AddPostActionType = {
    type: 'ADD_POST'
    text: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
export type SetUserStatusActionType = {
    type: 'SET_USER_STATUS'
    status: string
}
export type DeletePostActionType = {
    type: 'DELETE_POST'
    id: string
}
export type SavePhotoSuccessActionType = {
    type: 'SAVE_PHOTOS_SUCCESS',
    photos: File
}

export type ProfileActionType =
    AddPostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType

export type ProfilePageType = {
    posts: PostsType[]
    profile: any
    status: string
}
export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileInitialStateType = typeof profileInitialState

let profileInitialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi how are you", likeCount: 3},
        {id: v1(), message: "Yes no problem", likeCount: 6},
        {id: v1(), message: "Ok, let's go", likeCount: 8},
    ],
    profile: null,
    status: '',
}


export const profileReducer = (state: ProfileInitialStateType = profileInitialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: v1(), message: action.text, likeCount: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case SAVE_PHOTOS_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, text}) as const

export const setUserProfileAC = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
}) as const

export const setUserStatusAC = (status: string): SetUserStatusActionType => ({
    type: SET_USER_STATUS,
    status
}) as const

export const updateUserStatusAC = (status: string): SetUserStatusActionType => ({
    type: SET_USER_STATUS,
    status
}) as const

export const deletePostAC = (id: string): DeletePostActionType => ({
    type: DELETE_POST,
    id
}) as const

export const savePhotoSuccessAC = (photos: File): SavePhotoSuccessActionType => ({
    type: SAVE_PHOTOS_SUCCESS,
    photos
}) as const


export const getUserProfileTC = (id: string) => async (dispatch: Dispatch) => {
    let response = await getProfile(id)
    dispatch(setUserProfileAC(response.data))
}

export const getUserStatusTC = (id: string) => async (dispatch: Dispatch) => {
    let response = await getStatus(id)
    dispatch(setUserStatusAC(response.data))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let response = await updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await setPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos))
    }
}