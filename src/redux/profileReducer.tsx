import {v1} from "uuid";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type AddPostActionType = {
    type: 'ADD_POST'
    text: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

export type ProfileActionType = AddPostActionType | UpdateNewPostTextActionType

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
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
    newPostText: ''
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
        default:
            return state
    }
}

export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, text}) as const
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
}) as const