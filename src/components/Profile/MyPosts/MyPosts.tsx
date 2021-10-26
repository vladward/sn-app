import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {ProfileType} from "../Profile";

type MyPostsType = {
    posts: Array<ProfileType>
}

const MyPosts = (props: MyPostsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/> )}
            </div>
        </div>
    )
}
export default MyPosts