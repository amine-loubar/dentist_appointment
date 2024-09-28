import { useNavigate } from 'react-router-dom'
import { AdminTable } from '../components/admin/adminsTable'
import { useAuth } from "../hooks/useAuth"
import { useEffect } from 'react'

export const AdminsList = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!useAuth()) navigate("/admin/login")
    }, [])
    return (
        <AdminTable />
    )
}
