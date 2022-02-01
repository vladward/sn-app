import React from "react"
import s from "./ProfileInfo.module.css"
import PreLoader from "../../PreLoader/PreLoader";
import noPhoto from '../../../assets/noPhoto.jpg'
import {ProfileContainerType} from "../ProfileContainer";
import {ProfileStatus} from './ProfileStatus/ProfileStatus'


const ProfileInfo = ({profile, status, updateUserStatusTC}: ProfileContainerType) => {
    if (!profile) {
        return <PreLoader/>
    }

    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://tinypng.com/images/social/website.jpg" alt="profImg"/>
            </div>
            {profile ? <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : noPhoto} alt="userImg"/>
            </div> : null}
            <ProfileStatus status={status} updateUserStatusTC={updateUserStatusTC}/>
        </div>
    )
}

export default ProfileInfo