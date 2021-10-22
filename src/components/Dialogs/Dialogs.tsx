import React from "react"
import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"

type ImgStateType = {
    srcVlad: string
    srcAndrei: string
    srcYuzik: string
}

let imgState: ImgStateType = {
    srcVlad: "https://avatars.githubusercontent.com/u/86200275?v=4",
    srcAndrei: "https://sun9-82.userapi.com/impf/c851420/v851420101/ee006/xGkm5WXSTwQ.jpg?size=1620x2160&quality=96&sign=7f437383d44301927bca846393723c80&type=album",
    srcYuzik: "https://dnepr.news/images/cache/imagescacheimagesthumbNewstext/c-349-233-koryavchenkov-1.webp"
}

let dialogsState = [
    {id: 1, name: "vlad"},
    {id: 2, name: "andrei"},
    {id: 3, name: "yuzik"}
]

let messagesState = [
    {message: "Hi"},
    {message: "Bye"}
]

const DialogItem = (props: any) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.im} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsState[0].name} id={dialogsState[0].id} im={imgState.srcVlad}/>
                <DialogItem name={dialogsState[1].name} id={dialogsState[1].id} im={imgState.srcAndrei}/>
                <DialogItem name={dialogsState[2].name} id={dialogsState[2].id} im={imgState.srcYuzik}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesState[0].message}/>
                <Message message={messagesState[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs