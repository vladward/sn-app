import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {ProfilePageType} from "../../redux/state";


export type ProfileType = {
    id: number
    message: string
    likeCount: number
}

export type AddPostType = {
    addPost: (newPostMessage: string) => void
}

const Profile: React.FC<ProfilePageType & AddPostType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile