import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"


let dialogs = [
    {id: 1, name: "vlad", src: "https://avatars.githubusercontent.com/u/86200275?v=4"},
    {id: 2, name: "andrei", src: "https://sun9-82.userapi.com/impf/c851420/v851420101/ee006/xGkm5WXSTwQ.jpg?size=1620x2160&quality=96&sign=7f437383d44301927bca846393723c80&type=album"},
    {id: 3, name: "yuzik", src: "https://dnepr.news/images/cache/imagescacheimagesthumbNewstext/c-349-233-koryavchenkov-1.webp"}
]

let messages = [
    {message: "Hi"},
    {message: "Bye"}
]

const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id} im={d.src}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs