import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { CreateAdmin } from './pages/CreateAdmin'
import { AdminsList } from './pages/AdminsList'
import { SpinnerLoading } from './components/global/SpinnerLoading'
import { Appointment } from './pages/Appointment'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/appointment',
        element: (
            <Suspense fallback={<SpinnerLoading loadingText="Loading..." />}>
                <Appointment />
            </Suspense>
        )
    },
    {
        path: '/admin/login',
        element: (
            <Suspense fallback={<SpinnerLoading loadingText="Loading..." />}>
                <Login />
            </Suspense>
        )
    },
    {
        path: '/admin',
        element: (
            <Suspense fallback={<SpinnerLoading loadingText="Loading..." />}>
                <Admin />
            </Suspense>
        )
    },
    {
        path: '/admin/create-admin',
        element: (
            <Suspense fallback={<SpinnerLoading loadingText="Loading..." />}>
                <CreateAdmin />
            </Suspense>
        )
    },
    {
        path: '/admin/admins',
        element: (
            <Suspense fallback={<SpinnerLoading loadingText="Loading..." />}>
                <AdminsList />
            </Suspense>
        )
    }
])