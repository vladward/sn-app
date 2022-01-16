//constants
import {followUser, getUsers, unfollowUser} from "../api/users";
import {ThunkType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IS_PROGRESS = "FOLLOWING_IS_PROGRESS"

//types
export type UsersType = {
    id: string
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string,
}
export type UsersInitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: string[]
}
type FollowACType = {
    type: "FOLLOW",
    id: string
}
type UnFollowACType = {
    type: "UNFOLLOW",
    id: string
}
type SetUsersACType = {
    type: "SET_USERS",
    users: any
}
type SetCurrentPageACType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type setTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT",
    totalCount: number
}
type setIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
type setFollowingInProgressACType = {
    type: "FOLLOWING_IS_PROGRESS",
    isFetching: boolean,
    userId: string
}
export type UsersGeneralActionType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType
    | setFollowingInProgressACType
export type ProfileInitialStateType = typeof UsersInitialState

const UsersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

//reducer
export const usersReducer = (state: ProfileInitialStateType = UsersInitialState, action: UsersGeneralActionType): ProfileInitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IS_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

//action creators
export const followAC = (id: string): FollowACType => ({type: FOLLOW, id}) as const
export const unFollowAC = (id: string): UnFollowACType => ({type: UNFOLLOW, id}) as const
export const setUsersAC = (users: any): SetUsersACType => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
}) as const
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const
export const setFollowingInProgressAC = (isFetching: boolean, userId: string): setFollowingInProgressACType => ({
    type: FOLLOWING_IS_PROGRESS,
    isFetching,
    userId
}) as const

//thunk creators
export const getUsersTC = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true))
        getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setIsFetchingAC(false))
                dispatch(setUsersAC(res.items))
                dispatch(setTotalUsersCountAC(res.totalCount))
            })
    }
}

export const unFollowTC = (id: string): ThunkType => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(true, id))
        unfollowUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unFollowAC(id))
                }
                dispatch(setFollowingInProgressAC(false, id))
            })
    }
}

export const followTC = (id: string): ThunkType => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(true, id))
        followUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(setFollowingInProgressAC(false, id))
            })
    }
}