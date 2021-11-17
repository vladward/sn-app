import React from "react"
import {ActionType, AddPostActionType, ProfileType, RootStateType, UpdateNewPostTextActionType} from "./state";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


export const profileReducer = (state: RootStateType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: ProfileType = {
                id: 5,
                message: state.profilePage.newPostText,
                likeCount: 1
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText
            return state

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})