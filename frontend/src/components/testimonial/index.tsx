
export const Testimonial = () => {
    return (
        <div className="py-16 ">
            <h2 className="mb-16 text-4xl font-bold text-center ">What Our <span className="text-primary">Patients Say</span></h2>
            <div className="flex flex-wrap justify-center gap-8">
                {[
                    { name: 'John Doe', text: 'Best dental experience ever! The staff is friendly and professional.' },
                    { name: 'Jane Smith', text: 'I love my new smile! Thank you!' }
                ].map((testimonial, index) => (
                    <div key={index} className="border border-gray-700  card w-96">
                        <div className="card-body">
                            <h2 className="font-bold card-title">{testimonial.name}</h2>
                            <p className="text-gray-600">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
