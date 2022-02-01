import s from './User.module.css'
import noPhoto from './../../../assets/noPhoto.jpg'
import React from "react";
import {NavLink} from 'react-router-dom';
import {UsersType} from "../../../redux/usersReducer";

type UserComponentType = {
    user: UsersType
    followingInProgress: string[]
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export const User = ({user, followingInProgress, unFollow, follow}: UserComponentType) => {

    return (
        <div>
            <span>
                <div className={s.userPhotoContainer}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos[0] ? user.photos[0] : noPhoto} alt="img" className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unFollow(user.id)
                              }}>
                        unfollow
                    </button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        follow
                    </button>
                }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </div>
    )
}