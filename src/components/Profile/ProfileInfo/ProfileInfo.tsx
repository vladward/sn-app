import React from "react"
import s from "./ProfileInfo.module.css"
import PreLoader from "../../PreLoader/PreLoader";
import noPhoto from '../../../assets/noPhoto.jpg'
import {ProfileContainerType} from "../ProfileContainer";
import {ProfileStatus} from './ProfileStatus/ProfileStatus'


const ProfileInfo = (props: ProfileContainerType) => {
    if (!props.profile) {
        return <PreLoader/>
    }

    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://tinypng.com/images/social/website.jpg" alt="profImg"/>
            </div>
            {props.profile ? <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : noPhoto} alt="userImg"/>
            </div> : null}
            <ProfileStatus status={props.status} updateUserStatusTC={props.updateUserStatusTC}/>
        </div>
    )
}

export default ProfileInfo