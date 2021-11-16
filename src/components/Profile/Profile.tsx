import React from "react"
import MyPosts, {ProfileType} from "./MyPosts/MyPosts"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {ActionType, ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
    dispatch: (action: ActionType) => void
    posts: Array<ProfileType>
    newPostText: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile