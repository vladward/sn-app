import {instance} from "./instance";

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
}