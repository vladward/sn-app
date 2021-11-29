const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type AddPostActionType = {
    type: 'ADD_POST'
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
    id: number
    message: string
    likeCount: number
}
export type ProfileInitialStateType = typeof profileInitialState

let profileInitialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi how are you", likeCount: 3},
        {id: 2, message: "Yes no problem", likeCount: 6},
        {id: 3, message: "Ok, let's go", likeCount: 8},
    ],
    newPostText: ''
}


export const profileReducer = (state: ProfileInitialStateType = profileInitialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 1
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
}) as const