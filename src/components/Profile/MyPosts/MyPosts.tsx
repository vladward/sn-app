import React from "react"
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://i.pinimg.com/originals/64/3f/47/643f47695ee94faf67e95c4587a61f55.jpg" alt=""/>
                    post 1
                </div>
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12Slh8dRFuHXHnmUZfBs4KmMn5omrMwd8Kg&usqp=CAU" alt=""/>
                    post 2
                </div>
            </div>
        </div>
    )
}
 export default MyPosts