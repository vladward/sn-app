const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

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

type AddPostActionType = {
    type: 'ADD_POST'
    //postText: string
}
type UpdateNewPostTextActionType = {
    type : 'UPDATE_NEW_POST_TEXT'
    newText: string
}
type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
type UpdateNewMessageBodyActionType = {
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
        if (action.type === ADD_POST) {
            let newPost: ProfileType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 1
            }
            this.getState().profilePage.posts.push(newPost)
            this.getState().profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let mess: MessageType = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody
            }
            this.getState().dialogsPage.messages.push(mess)
            this.getState().dialogsPage.newMessageBody = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this.getState().dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        }
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText})
export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body: string): UpdateNewMessageBodyActionType => ({type: UPDATE_NEW_MESSAGE_BODY, body})

