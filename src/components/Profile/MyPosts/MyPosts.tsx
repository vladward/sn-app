import React, {createRef} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {ProfileType} from "../Profile";

type MyPostsType = {
    posts: Array<ProfileType>
    addPost: (postMessage: any) => void
}

const MyPosts = (props: MyPostsType) => {
    let newPostElement = createRef<HTMLInputElement>()
    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/> )

    const addPost = () => {
        let text = newPostElement.current
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <input ref={newPostElement}></input>
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