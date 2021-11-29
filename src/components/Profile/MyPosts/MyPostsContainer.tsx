import React, {ChangeEvent} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {ActionType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

export type ProfileType = {
    id: number
    message: string
    likeCount: number
}
type MyPostsType = {
    posts: Array<ProfileType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer