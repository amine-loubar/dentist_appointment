import { axios } from "../lib/axios"


export const getAdmins = async () => {
    const admins = await axios.get("/admin")
    return admins.data
}