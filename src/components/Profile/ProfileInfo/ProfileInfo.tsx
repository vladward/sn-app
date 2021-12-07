import React from "react"
import s from "./ProfileInfo.module.css"


const ProfileInfo = (props: ProfileContainerType) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://tinypng.com/images/social/website.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo