import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

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
}

export const Users = ({
                          totalUsersCount,
                          pageSize,
                          currentPage,
                          setCurrentPageHandler,
                          users,
                          ...props
                      }: UsersComponentType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator currentPage={currentPage}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       setCurrentPageHandler={setCurrentPageHandler}
                       portionSize={10}/>
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  key={u.id}
                                  unFollow={props.unFollowTC}
                                  follow={props.followTC}
            />)}
        </div>
    )
}