import { useEffect, useState } from "react";
import { getAdmins } from "../../stores/getAdmins";
import { SpinnerLoading } from "../global/SpinnerLoading";
import { axios } from "../../lib/axios"
import { useUser } from "../../contexts/UserContext";
import { User } from "../../types/UserType";
import { Link } from "react-router-dom";


async function handleDelete(id: string) {
    if (confirm("Are you sure you want to remove this admin?")) {
        const response = await axios.delete(`/admin/${id}`)
        if (response.status === 200) {
            alert("Admin deleted successfully");
            window.location.reload();
        } else {
            alert("Failed to delete admin");
        }
    }
}


export const AdminTable = () => {
    const [admins, setAdmins] = useState<User[]>([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Set loading state to true initially
    const { user } = useUser()

    const getAdminsData = async () => {
        try {
            const admins = await getAdmins();
            setAdmins(admins ?? []); // Fallback to empty array if admins is null or undefined
        } catch (error) {
            console.error("Error fetching admins:", error);
        } finally {
            setLoading(false); // Set loading to false once data fetching is complete
        }
    };

    useEffect(() => {
        getAdminsData();
    }, []);

    return (
        <>
            <div className="flex justify-between px-6 py-2">
                <h2 className="text-2xl font-bold">Admins List</h2>
                <div>
                    <div className="tooltip tooltip-left tooltip-primary" data-tip="Add Admin">
                        <Link to="/admin/create-admin"><button className="btn btn-square btn-primary btn-outline btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" /></svg>
                        </button></Link>
                    </div>
                </div>
            </div>
            <div className="hidden overflow-x-auto xs:block">
                {loading ? (
                    // Loading message or spinner
                    <SpinnerLoading loadingText="Loading Admins..." />
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.length > 0 ? (
                                admins.map((admin: any, index: number) => (
                                    admin._id === user?._id ? "" : (
                                        <tr key={admin.email || index}>
                                            <th>{index + 1}</th>
                                            <td>{admin.name}</td>
                                            <td>{admin.email}</td>
                                            <td className="flex gap-2 place-content-center">
                                                <button className="btn btn-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                            <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                                                            <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                                                        </g>
                                                    </svg>
                                                </button>
                                                <button className="bg-red-300 btn btn-sm" onClick={() => { handleDelete(admin._id) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center">No admins available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};
