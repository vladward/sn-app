import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd2b9a4d9-cefb-4fec-a892-1707fa6823da'
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
}

export const unfollowUser = (id) => {
    return instance.delete(`follow/${id}`).then(res => res.data)
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`).then(res => res.data)
}