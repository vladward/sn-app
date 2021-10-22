import React from "react"
import s from "./ProfileInfo.module.css"


const ProfileInfo = (props:any) => {
    return (
        <div>
            <div>
                <img src="https://tinypng.com/images/social/website.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo