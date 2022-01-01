import {instance} from "./instance";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
}

export const unfollowUser = (id) => {
    return instance.delete(`follow/${id}`).then(res => res.data)
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`).then(res => res.data)
}