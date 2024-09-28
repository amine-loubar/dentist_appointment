import { axios } from "../lib/axios"
import { User } from "../types/UserType"

export const useUserData = async (user: User) => {

    const userData = await axios.get(`/admin/${user?.id}`);
    return userData.data
}