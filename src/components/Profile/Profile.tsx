import React from "react"
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://tinypng.com/images/social/website.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile