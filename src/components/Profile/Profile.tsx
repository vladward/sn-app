import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";

export type ProfilePropsType = {
    isOwner: boolean
}

const Profile = (props: ProfileContainerType & ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo {...props}
                isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateUserStatusTC={props.updateUserStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile