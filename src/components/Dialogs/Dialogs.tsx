import React, {ChangeEvent, KeyboardEvent} from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import {DialogsContainerType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


const Dialogs = (props: DialogsContainerType) => {
    const newMessageBody = props.dialogsPage.newMessageBody
    const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.onChangeMessage(body)
    }
    const sendMessageBodyHandler = () => {
        props.sendMessageBody()
    }
    const onEnterMessageHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessageBodyHandler()
        }
    }

    let dialogs = props.dialogsPage.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} src={d.src}/>)
    let messages = props.dialogsPage.messages.map((m, i) => <Message key={i} message={m.message} id={m.id}/>)

    if (!props.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
                <div>
                    <input placeholder="Enter you message..."
                           value={newMessageBody}
                           onKeyPress={onEnterMessageHandler}
                           onChange={onChangeMessageHandler}/>
                </div>
                <div>
                    <button onClick={sendMessageBodyHandler}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs