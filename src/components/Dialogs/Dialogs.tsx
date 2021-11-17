import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import {
    ActionType,
    DialogType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";

export type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionType) => void
}
export type MessageType = {
    id: number
    message: string
}

const Dialogs = (props: DialogPageType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs