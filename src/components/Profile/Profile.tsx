import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";

const Profile = (props: ProfileContainerType) => {
    return (
        <div>
            <ProfileInfo {...props} profile={props.profile} status={props.status} updateUserStatusTC={props.updateUserStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile