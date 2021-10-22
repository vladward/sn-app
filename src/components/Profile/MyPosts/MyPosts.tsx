import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


let postState = [
    {id: 1, message: 'Hi how are you', likeCount: 3},
    {id: 2, message: 'Yes no problem', likeCount: 6},

]


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
                <Post message={postState[0].message} likeCount={postState[0].likeCount}/>
                <Post message={postState[1].message} likeCount={postState[0].likeCount}/>
            </div>
        </div>
    )
}
export default MyPosts