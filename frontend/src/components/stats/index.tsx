

export const Stats = () => {
    return (
        <>
            <div className="py-16 bg-primary/10 sm:pb-16">
                <div>
                    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="bg-white rounded-lg sm:grid sm:grid-cols-3">
                                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">Patients' Satisfied</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-primary "><span>1800</span>+</dd>
                                </div>
                                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">Appointments Booked Online</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-primary "><span>900</span>+</dd>
                                </div>
                                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">Years of Experience</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-primary "><span>10</span>+</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
