import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import {DialogsContainerType} from "./DialogsContainer"
import {AddMessageFormDataType, AddMessageFormRedux} from "./AddMessageForm/AddMessageForm"

const Dialogs = (props: DialogsContainerType) => {

    let dialogs = props.dialogsPage.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} src={d.src}/>)
    let messages = props.dialogsPage.messages.map((m, i) => <Message key={i} message={m.message} id={m.id}/>)

    const addNewMessage = (formData: AddMessageFormDataType) => {
        props.sendMessageBody(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs