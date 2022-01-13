import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {MyPostsContainerType} from "./MyPostsContainer";
import {AddMessageFormDataType, AddMessageFormRedux} from "../../Dialogs/AddMessageForm/AddMessageForm";

const MyPosts = (props: MyPostsContainerType) => {
    let postsElements = props.profilePage.posts?.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/>)

    const addPost = (newPostText: AddMessageFormDataType) => {
        props.addPost(newPostText.newMessageBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddMessageFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts