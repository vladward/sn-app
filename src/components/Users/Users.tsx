import s from './Users.module.css'
import noPhoto from './../../assets/noPhoto.jpg'
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import { NavLink } from 'react-router-dom';
import axios from "axios";

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
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'd2b9a4d9-cefb-4fec-a892-1707fa6823da'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    UnFollowHandler(u.id)
                                }
                            })
                    }
                    }>unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'd2b9a4d9-cefb-4fec-a892-1707fa6823da'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    followHandler(u.id)
                                }
                            })
                    }
                    }>follow</button>
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