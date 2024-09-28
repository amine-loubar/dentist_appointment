import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { axios } from "../lib/axios"
import { useAuth } from "../hooks/useAuth"

export const CreateAdmin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!useAuth()) navigate("/admin/login")
    }, [])


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post('/admin/create-admin', { name, email, password })
            console.log(response)
            if (response.status === 201) {
                setLoading(false)
                navigate('/admin')
                window.location.reload()
            }
        } catch (error: any) {
            if (error.response?.status === 400) {
                setLoading(false)
                setError("User already exists")
            }
        }
    }

    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full px-8 sm:px-0 sm:min-w-72 sm:max-w-96">
            {error && (
                <div role="alert" className="alert alert-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-current shrink-0"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <label className="flex items-center gap-2 input input-bordered">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input className="grow" placeholder="Name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </label>
                <label className="flex items-center gap-2 input input-bordered">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input className="grow" placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </label>
                <label className="flex items-center gap-2 input input-bordered">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input className="grow"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {loading ? (<button className="btn">
                    <span className="loading loading-spinner"></span>
                    loading
                </button>) : (
                    <button className="btn btn-active btn-primary">Create Admin</button>
                )}
            </form>
        </div>
    )
}