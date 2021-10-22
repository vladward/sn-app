import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
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
                <Post message={'Hi how are you'} likeCount={3}/>
                <Post message={'Yes no problem'} likeCount={6}/>
            </div>
        </div>
    )
}
export default MyPosts