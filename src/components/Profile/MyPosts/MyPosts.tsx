import React, {ChangeEvent} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {MyPostsContainerType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsContainerType) => {
    let postsElements = props.profilePage.posts?.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea placeholder={'Text'} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts