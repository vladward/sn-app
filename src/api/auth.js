import {instance} from "./instance";

export const authMe = () => {
    return instance.get(`auth/me`)
}