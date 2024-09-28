import { useEffect, useState } from "react";
import { getAppointments } from "../../stores/getAppointments";
import { SpinnerLoading } from "../global/SpinnerLoading";
import { useUser } from "../../contexts/UserContext";
import { User } from "../../types/UserType";
import { axios } from "../../lib/axios";



async function handleUpdate(id: string, status: string) {
    try {
        const response = await axios.put(`/appointment/${id}`, { status: status });
        if (response.status === 200) {
            window.location.reload();
        }
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}




export const AppointmentsTable = () => {
    const [appointments, setAppointments] = useState<User[]>([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Set loading state to true initially
    const { user } = useUser()

    const getAppointmentsData = async () => {
        try {
            const appointments = await getAppointments();
            setAppointments(appointments ?? []); // Fallback to empty array if appointments is null or undefined
        } catch (error) {
            console.error("Error fetching appointments:", error);
        } finally {
            setLoading(false); // Set loading to false once data fetching is complete
        }
    };

    useEffect(() => {
        getAppointmentsData();
    }, []);

    return (
        <>
            <div className="flex justify-between px-6 py-2">
                <h2 className="text-2xl font-bold">Appointments</h2>
            </div>
            <div className="xs:block w-[calc(95%)]">
                {loading ? (
                    // Loading message or spinner
                    <SpinnerLoading loadingText="Loading Appointments..." />
                ) : (
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th className="hidden sm:table-cell">Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th className="hidden md:table-cell">Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.length > 0 ? (
                                appointments.map((appointment: any, index: number) => (
                                    appointment._id === user?._id ? "" : (
                                        <tr key={appointment._id || index}>
                                            <th>{index + 1}</th>
                                            <td>{appointment.name}</td>
                                            <td className="hidden sm:table-cell">{appointment.email}</td>
                                            <td>{appointment.phone}</td>
                                            <td>{new Date(appointment.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                                            <td className="hidden md:table-cell">{appointment.reason}</td>
                                            <td>
                                                <div className="dropdown">
                                                    <div tabIndex={0} role="button" className={`m-1 btn btn-sm ${appointment.status === "pending" ? "btn-warning" : appointment.status === "complete" ? "btn-success" : appointment.status === "scheduled" ? "btn-primary" : "btn-error"}`}>{appointment.status}</div>
                                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                        <li><a onClick={() => handleUpdate(appointment._id, "pending")}>pending</a></li>
                                                        <li><a onClick={() => handleUpdate(appointment._id, "scheduled")}>scheduled</a></li>
                                                        <li><a onClick={() => handleUpdate(appointment._id, "complete")}>completed</a></li>
                                                        <li><a onClick={() => handleUpdate(appointment._id, "canceled")}>canceled</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center">No appointments available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};
