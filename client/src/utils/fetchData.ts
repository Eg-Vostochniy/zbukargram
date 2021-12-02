import axios from "axios"

export const postAPI = async (url: string, data: Object, token?: string): Promise<any> => {
    return await axios.post(`/api/${url}`, data, {
        headers: { Authorization: token || '' }
    })
}
export const getAPI = async (url: string, token?: string): Promise<any> => {
    return await axios.get(`/api/${url}`, {
        headers: { Authorization: token || '' }
    })
}