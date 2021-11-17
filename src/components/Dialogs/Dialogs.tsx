import React, {ChangeEvent, KeyboardEvent} from "react"
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} src={d.src} />)}
            </div>
            <div className={s.messages}>
                {props.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)}
            </div>
            <div>
                <div>
                    <input placeholder="Enter you message..."
                           value={newMessageBody}
                           onKeyPress={onEnterMessage}
                           onChange={onChangeMessage}/>
                </div>
                <div>
                    <button onClick={sendMessageBody}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs