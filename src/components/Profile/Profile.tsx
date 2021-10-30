import React from "react"
import MyPosts, {ProfileType} from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    posts: Array<ProfileType>
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile