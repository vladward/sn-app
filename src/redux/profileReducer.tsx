const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: ProfileType = {
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

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})