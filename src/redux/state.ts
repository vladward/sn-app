import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    src: string
}
export type ProfileType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<ProfileType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
}

export type AddPostActionType = {
    type: 'ADD_POST'
    //postText: string
}
export type UpdateNewPostTextActionType = {
    type : 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type UpdateNewMessageBodyActionType = {
    type : 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
export type ActionType = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageBodyActionType



export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you", likeCount: 3},
                {id: 2, message: "Yes no problem", likeCount: 6},
                {id: 3, message: "Ok, let's go", likeCount: 8},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "vlad", src: "https://avatars.githubusercontent.com/u/86200275?v=4"},
                {id: 2, name: "andrei", src: "https://sun9-82.userapi.com/impf/c851420/v851420101/ee006/xGkm5WXSTwQ.jpg?size=1620x2160&quality=96&sign=7f437383d44301927bca846393723c80&type=album"},
                {id: 3, name: "yuzik", src: "https://dnepr.news/images/cache/imagescacheimagesthumbNewstext/c-349-233-koryavchenkov-1.webp"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Bye"}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('state change')
    },
    dispatch(action) {
        this._state = profileReducer(this._state, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    }
}


