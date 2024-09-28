import { ChangeEvent, useState } from 'react'
import { CalendarIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { axios } from '../lib/axios';

interface Appointment {
    name: string,
    address: string,
    email: string,
    phone: string,
    date: string,
    reason: string
}

export function Appointment() {
    const [data, setData] = useState<Appointment>({
        name: "",
        address: "",
        email: "",
        phone: "",
        date: "",
        reason: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await axios.post("/appointment", data)
            alert("Appointment created successfully")
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container flex-grow px-4 py-8 mx-auto">
                <section className="mb-8 hero bg-base-200 rounded-box">
                    <div className="text-center hero-content">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-primary">Your Smile Matters</h1>
                            <p className="py-6 text-gray-600">Book your dental appointment today and take the first step towards a healthier, brighter smile!</p>
                        </div>
                    </div>
                </section>

                <div className="grid gap-8 md:grid-cols-2">
                    <section className=" card bg-base-100">
                        <div className="card-body">
                            <h2 className="mb-4 text-2xl card-title">Book Your Appointment</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="John Doe" className="w-full input input-bordered" value={data.name} onChange={handleChange} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="Your city name" className="w-full input input-bordered" value={data.address} onChange={handleChange} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" value={data.email} placeholder="john@example.com" className="w-full input input-bordered" onChange={handleChange} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" value={data.phone} name="phone" placeholder="(123) 456-7890" className="w-full input input-bordered" onChange={handleChange} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Appointment Date</span>
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="date"
                                            name="date"
                                            min={new Date().toISOString().split('T')[0]}
                                            value={data.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full input input-bordered"
                                        />
                                        <span className="btn btn-square">
                                            <CalendarIcon className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Appointment Reason</span>
                                    </label>
                                    <textarea onChange={handleChange} name="reason" value={data.reason} className="textarea textarea-md textarea-bordered" placeholder="What is the Reason for appointment?" maxLength={250} required></textarea>
                                </div>
                                <button type="submit" className="w-full btn btn-primary">Book Appointment</button>
                            </form>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className=" card bg-base-100">
                            <div className="card-body">
                                <h2 className="mb-4 text-2xl card-title">Why Choose Us?</h2>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>State-of-the-art dental equipment</li>
                                    <li>Experienced and friendly staff</li>
                                    <li>Comfortable and relaxing environment</li>
                                    <li>Flexible scheduling options</li>
                                    <li>Affordable dental care plans</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" card bg-base-100">
                            <div className="card-body">
                                <h2 className="mb-4 text-2xl card-title">Contact Information</h2>
                                <div className="space-y-2">
                                    <p className="flex items-center">
                                        <PhoneIcon className="w-5 h-5 mr-2" />
                                        (123) 456-7890
                                    </p>
                                    <p className="flex items-center">
                                        <MapPinIcon className="w-5 h-5 mr-2" />
                                        123 example st, example City, FL 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="p-4 footer footer-center bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2024 - All rights reserved by dentist appointment</p>
                </div>
            </footer>
        </div>
    )
}