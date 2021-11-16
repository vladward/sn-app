import React, {ChangeEvent} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {ActionType} from "../../../redux/state";

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
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/>)

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
        // props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let text = newPostElement.current ? newPostElement.current.value : ''
        //props.updateNewPostText(props.newPostText)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
        // props.updateNewPostText(e.currentTarget.value)
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