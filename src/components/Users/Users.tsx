import s from './Users.module.css'
import noPhoto from './../../assets/noPhoto.jpg'
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {NavLink, Redirect} from 'react-router-dom';

type UsersComponentType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    setCurrentPageHandler: (currentPage: number) => void
    followTC: (id: string) => void
    unFollowTC: (id: string) => void
    isAuth: boolean
}

export const Users = (props: UsersComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (!props.isAuth) {
        return <Redirect to='/login' />
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
                        <img src={u.photos[0] ? u.photos[0] : noPhoto} alt="img" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                  props.unFollowTC(u.id)
                              }}>
                        unfollow
                    </button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                  props.followTC(u.id)
                              }}>
                        follow
                    </button>
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