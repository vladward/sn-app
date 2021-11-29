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

switch (action.type) {
    case SEND_MESSAGE:
        let mess: MessageType = {
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


export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body
})
