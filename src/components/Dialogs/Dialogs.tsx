import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">andrei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">yuzik</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs