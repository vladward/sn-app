import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from 'axios';
import noPhoto from './../../assets/noPhoto.jpg'
import React from "react";

export class Users extends React.Component<UsersContainerType> {

    constructor(props: UsersContainerType) {
        super(props)
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response)
            })
    }

    followHandler = (id: string) => {
        this.props.follow(id)
    }
    UnFollowHandler = (id: string) => {
        this.props.unFollow(id)
    }
    setCurrentPageHandler = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response)
            })
        this.props.setCurrentPage(page)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>{pages.map((p, i) => {
                        return <span key={i}
                                     onClick={() => this.setCurrentPageHandler(p)}
                                     className={this.props.currentPage === p ? s.currentPage : ''}
                        >{p}</span>
                    }
                )}</div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                    <div className={s.userPhotoContainer}>
                    <img src={u.photos[0] ? u.photos[0] : noPhoto} alt="photo" className={s.userPhoto}/>
                    </div>
                    <div>
                {u.followed
                    ? <button onClick={() => this.UnFollowHandler(u.id)}>unfollow</button>
                    : <button onClick={() => this.followHandler(u.id)}>follow</button>
                }
                    </div>
                    </span>
                    <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                        {/*<span>*/}
                        {/*    <div>{u.location.city}</div>*/}
                        {/*    <div>{u.location.country}</div>*/}
                        {/*</span>*/}
                    </span>
                </div>)}
            </div>
        )
    }
}