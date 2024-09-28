import { axios } from "../lib/axios"


export const getAppointments = async () => {
    const appointments = await axios.get("/appointment")
    return appointments.data
}