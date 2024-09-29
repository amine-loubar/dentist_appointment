import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {

    return (
        <div className="sticky top-0 z-50 bg-white navbar">
            <div className="flex-1">
                <Link to="/" className="text-xl btn btn-ghost">Dentist Appointment</Link>
            </div>
            
        </div>
    );
};
