const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


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
}
type UsersActionType = {
    type: string
    id: string
    users: any
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

export type ProfileInitialStateType = typeof UsersInitialState

const UsersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: ProfileInitialStateType = UsersInitialState, action: UsersActionType): ProfileInitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map( u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map( u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (id: string): FollowACType => ({type: FOLLOW, id})
export const unFollowAC = (id: string): UnFollowACType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: any): SetUsersACType => ({type: SET_USERS, users})