import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";

const Profile = (props: ProfileContainerType) => {
    return (
        <div>
            <ProfileInfo {...props} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile