const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"


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
type GeneralActionType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | setTotalUsersCountACType
export type ProfileInitialStateType = typeof UsersInitialState

const UsersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: ProfileInitialStateType = UsersInitialState, action: GeneralActionType): ProfileInitialStateType => {
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
        default:
            return state
    }
}

export const followAC = (id: string): FollowACType => ({type: FOLLOW, id})
export const unFollowAC = (id: string): UnFollowACType => ({type: UNFOLLOW, id})
export const setUsersAC = (users: any): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountACType => ({type: SET_TOTAL_USERS_COUNT, totalCount})