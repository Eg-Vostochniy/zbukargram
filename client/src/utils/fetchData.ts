import axios from "axios"

export const postAPI = async (url: string, data: Object, token?: string) => {
    return await axios.post(`/api/${url}`, data, {
        headers: { Authorization: token || '' }
    })
}
export const getAPI = async (url: string, token?: string) => {
    return await axios.post(`/api/${url}`, {
        headers: { Authorization: token || '' }
    })
}