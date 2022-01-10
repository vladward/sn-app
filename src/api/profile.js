import {instance} from "./instance";

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
}
export const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
}
export const updateStatus = (status) => {
    return instance.put(`profile/status/`, {status}) // status: status
}