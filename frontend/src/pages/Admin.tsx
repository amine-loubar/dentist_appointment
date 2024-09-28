import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../components/navbar/AdminNavbar"
import { AppointmentsTable } from "../components/admin/appointmentsTable"


export const Admin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!useAuth()) navigate("/admin/login")
    }, [])
    return (
        <>
            <AdminNavbar />
            <AppointmentsTable />
        </>
    )
}
