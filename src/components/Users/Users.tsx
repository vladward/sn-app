import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import axios from 'axios';
import noPhoto from './../../assets/noPhoto.jpg'

export const Users = (props: UsersContainerType) => {
    const followHandler = (id: string) => {
        props.follow(id)
    }
    const UnFollowHandler = (id: string) => {
        props.unFollow(id)
    }
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
                console.log(response)
            })

    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.userPhotoContainer}>
                        <img src={u.photoUrl} alt="photo" className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => UnFollowHandler(u.id)}>unFollow</button>
                            : <button onClick={() => followHandler(u.id)}>follow</button>
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