import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export const AdminNavbar: React.FC = () => {
    const navigate = useNavigate()

    const { user } = useUser()

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout?")) {
            localStorage.removeItem('token');
            navigate("/admin/login")
        }
    }

    return (
        <div className="z-50 flex items-center px-4 navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="text-xl btn btn-ghost">Dentist Appointment</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="m-1 btn">{user?.name}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className="flex">
                            <Link to="/admin/admins">Admins</Link>
                        </li>
                        <li className="flex">
                            <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2">
                                <svg className='-me-1' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="black" d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z" /><path fill="currentColor" d="m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7" /></svg>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
