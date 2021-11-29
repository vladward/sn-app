import React, {ChangeEvent, KeyboardEvent} from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import {
    ActionType,
    DialogType,
    MessageType,
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";

export type DialogPropsType = {
    store: any
}

const Dialogs = (props: DialogPropsType) => {
    const newMessageBody = props.newMessageBody
    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }
    const sendMessageBody = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onEnterMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessageBody()
        }
    }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer