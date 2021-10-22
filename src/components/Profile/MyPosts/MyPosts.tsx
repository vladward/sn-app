import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


let posts = [
    {id: 1, message: "Hi how are you", likeCount: 3},
    {id: 2, message: "Yes no problem", likeCount: 6},
    {id: 3, message: "Ok, let's go", likeCount: 8},
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
                {posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> )}
            </div>
        </div>
    )
}
export default MyPosts