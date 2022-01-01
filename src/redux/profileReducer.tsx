import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {getProfile} from "../api/profile";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type AddPostActionType = {
    type: 'ADD_POST'
    text: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: any
}

export type ProfileActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: any
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
    newPostText: '',
    profile: null
}


export const profileReducer = (state: ProfileInitialStateType = profileInitialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.text, likeCount: 1}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, text}) as const
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
}) as const
export const setUserProfileAC = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
}) as const

export const getUserProfileTC = (id: string) => (dispatch: Dispatch) => {
    getProfile(id)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}