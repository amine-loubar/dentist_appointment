import { Link } from "react-router-dom"


export const Hero = () => {
    return (
        <>
            <div id="home" className="min-h-[80vh] hero">
                <div className="text-center hero-content">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Bright Smiles, <span className="text-primary">Bright Futures</span></h1>
                        <p className="py-6">
                            Book Your Appointment Today for a Healthier, Brighter Smile.
                        </p>
                        <button className="btn btn-primary">
                            <Link to="/appointment">Book Appointment</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
