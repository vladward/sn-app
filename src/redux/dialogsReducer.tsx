import React from "react"
import {MessageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

export const dialogsReducer = (state:any, action:any) => {

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
export const updateNewMessageBodyActionCreator = (body: string): UpdateNewMessageBodyActionType => ({type: UPDATE_NEW_MESSAGE_BODY, body})
