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
export const setPhoto = (photoFile) => {
    let formData = new FormData()
    formData.append('image', photoFile)
    return instance.put('profile/photo', formData, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    })
}