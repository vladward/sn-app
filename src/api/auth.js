import {instance} from "./instance";

export const authMe = () => {
    return instance.get(`auth/me`)
}
export const login = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
}
export const logout = () => {
    return instance.delete('auth/login')
}