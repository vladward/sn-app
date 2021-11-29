const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
export type DialogsActionType = SendMessageActionType | UpdateNewMessageBodyActionType
export type DialogsType = {
    id: number
    name: string
    src: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string
}
export type DialogsInitialStateType = typeof dialogsInitialState

let dialogsInitialState: DialogsPageType = {
        dialogs: [
            {id: 1, name: "vlad", src: "https://avatars.githubusercontent.com/u/86200275?v=4"},
            {
                id: 2,
                name: "andrei",
                src: "https://sun9-82.userapi.com/impf/c851420/v851420101/ee006/xGkm5WXSTwQ.jpg?size=1620x2160&quality=96&sign=7f437383d44301927bca846393723c80&type=album"
            },
            {
                id: 3,
                name: "yuzik",
                src: "https://dnepr.news/images/cache/imagescacheimagesthumbNewstext/c-349-233-koryavchenkov-1.webp"
            }
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Bye"}
        ],
        newMessageBody: ''
}

export const dialogsReducer = (state: DialogsInitialStateType = dialogsInitialState, action: DialogsActionType): DialogsInitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let mess: MessagesType = {
                id: 6,
                message: state.newMessageBody
            }
            state.messages.push(mess)
            state.newMessageBody = ''
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}


export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyActionCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body
}) as const
