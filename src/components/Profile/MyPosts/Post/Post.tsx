import s from "./Post.module.css";
import React from "react";

type PostMessageType = {
    message: string
    likeCount: number
}

const Post = (props: PostMessageType) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/64/3f/47/643f47695ee94faf67e95c4587a61f55.jpg" alt=""/>
            {props.message}
            <div>
                <span> like: {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post