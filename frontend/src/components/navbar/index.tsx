import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {

    return (
        <div className="sticky top-0 z-50 bg-white navbar">
            <div className="flex-1">
                <Link to="/" className="text-xl btn btn-ghost">Dentist Appointment</Link>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
