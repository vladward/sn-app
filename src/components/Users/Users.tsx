import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import {v1} from "uuid";

export const Users = (props: UsersContainerType) => {
    const followHandler = (id: string) => {
        props.follow(id)
    }
    const UnFollowHandler = (id: string) => {
        props.unFollow(id)
    }
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: "https://tlgrm.ru/_/stickers/2e2/4ca/2e24caad-80c3-3806-bdb6-04c1f296729e/3.jpg",
                followed: false,
                fullName: "Vladislav",
                status: "Working...",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
                followed: false,
                fullName: "Andrei",
                status: "Working...",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: "https://sun9-25.userapi.com/impg/c857228/v857228999/1f59d7/grD8bjd7fF4.jpg?size=2560x1709&quality=96&sign=9a0998dc16b033a2ef4108d8e766e5b0&type=album",
                followed: false,
                fullName: "Kate",
                status: "Working...",
                location: {city: "Minsk", country: "Belarus"}
            }
        ])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}