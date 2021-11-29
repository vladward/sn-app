import React from "react"
import {NavLink} from "react-router-dom"
import s from "./../Dialogs.module.css"
import {DialogsType} from "../../../redux/dialogsReducer";

const DialogItem = (props: DialogsType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.src} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem