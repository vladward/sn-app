import s from './Users.module.css'
import noPhoto from './../../assets/noPhoto.jpg'
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import { NavLink } from 'react-router-dom';

type UsersComponentType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: string) => void
    unFollow: (id: string) => void
    setCurrentPageHandler: (currentPage: number) => void
}

export const Users = (props: UsersComponentType) => {

    const followHandler = (id: string) => {
        props.follow(id)
    }
    const UnFollowHandler = (id: string) => {
        props.unFollow(id)
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>{pages.map((p, i) => {
                    return <span key={i}
                                 style={{backgroundColor: "rosybrown", border: "1px solid black"}}
                                 onClick={() => props.setCurrentPageHandler(p)}
                                 className={props.currentPage === p ? s.currentPage : ''}
                    >{p}</span>
                }
            )}</div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                    <div className={s.userPhotoContainer}>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos[0] ? u.photos[0] : noPhoto} alt="photo" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                {u.followed
                    ? <button onClick={() => UnFollowHandler(u.id)}>unfollow</button>
                    : <button onClick={() => followHandler(u.id)}>follow</button>
                }
                    </div>
                    </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
            </div>)}
        </div>
    )
}