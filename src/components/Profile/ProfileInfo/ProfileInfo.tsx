import React, {ChangeEvent} from "react"
import s from "./ProfileInfo.module.css"
import PreLoader from "../../PreLoader/PreLoader";
import noPhoto from '../../../assets/noPhoto.jpg'
import {ProfileContainerType} from "../ProfileContainer";
import {ProfileStatus} from './ProfileStatus/ProfileStatus'
import {ProfilePropsType} from "../Profile";


const ProfileInfo = ({profile, status, updateUserStatusTC, isOwner, savePhoto, ...props}: ProfileContainerType & ProfilePropsType) => {
    if (!profile) {
        return <PreLoader/>
    }

    const onSetUserPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const photo = profile.photos.large ? profile.photos.large : noPhoto
    const imagePath = (path: string) => {
        return {
            backgroundImage: 'url(' + path + ')',
            width: '250px',
            height: '250px',
            margin: '15px',
            padding: '15px',
            borderRadius: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }

    }

    return (
        <div>
            <div>
                <img className={s.profileImage} src="https://tinypng.com/images/social/website.jpg" alt="profImg"/>
            </div>
            {profile && <div className={s.descriptionBlock} style={imagePath(photo)}/>}
            {isOwner && <input type="file" onChange={onSetUserPhoto} />}
            <ProfileStatus status={status} updateUserStatusTC={updateUserStatusTC}/>
        </div>
    )
}

export default ProfileInfo