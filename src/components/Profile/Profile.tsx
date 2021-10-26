import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

export type ProfileType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<ProfileType>
}

const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile