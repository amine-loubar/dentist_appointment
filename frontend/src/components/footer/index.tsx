import { Calendar, Clock, Phone } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="p-10 text-black footer bg-primary/10">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">General Dentistry</a>
                <a className="link link-hover">Cosmetic Dentistry</a>
                <a className="link link-hover">Orthodontics</a>
                <a className="link link-hover">Pediatric Dentistry</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Sun-Thu: 9am-6pm</span>
                </div>
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Book Online 24/7</span>
                </div>
            </div>
        </footer>
    )
}
