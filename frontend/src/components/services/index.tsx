
export const Services = () => {
    const dentistservices = [
        {
            category: "General Dentistry",
            services: [
                { name: "Routine Checkups and Cleanings", description: "Regular dental exams and professional teeth cleanings." },
                { name: "Fillings", description: "Repair of cavities with materials like amalgam or composite resins." },
                { name: "Tooth Extractions", description: "Removal of damaged, decayed, or problematic teeth." },
                { name: "Root Canal Treatment", description: "Procedure to save a tooth with infected or dead pulp." },
                { name: "Oral Cancer Screening", description: "Regular checkups for early detection of oral cancer." }
            ]
        },
        {
            category: "Cosmetic Dentistry",
            services: [
                { name: "Teeth Whitening", description: "Treatment to brighten discolored or stained teeth." },
                { name: "Veneers", description: "Thin shells of porcelain or resin bonded to teeth for aesthetic improvements." },
                { name: "Cosmetic Bonding", description: "Application of resin to repair chipped, decayed, or discolored teeth." },
                { name: "Smile Makeover", description: "Combination of treatments to improve the appearance of the smile." }
            ]
        },
        {
            category: "Orthodontics",
            services: [
                { name: "Braces", description: "Metal braces or clear aligners like Invisalign for correcting teeth alignment." },
                { name: "Retainers", description: "Post-treatment appliances to maintain teeth alignment." }
            ]
        },
        {
            category: "Pediatric Dentistry",
            services: [
                { name: "Child Dental Exams", description: "Specialized care for children, including preventive treatments." },
                { name: "Fluoride and Sealant Treatments", description: "Preventive care for kids to protect against decay." }
            ]
        }
    ];

    return (
        <>
            <div className="py-24 bg-primary/10">
                <h2 className="mb-16 text-4xl font-bold text-center ">Our <span className="text-primary">Services</span></h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {dentistservices.map((dentistservice, index) => (
                        <div key={index} className="w-64 bg-white card">
                            <div className="items-center text-center card-body">
                                <h2 className="card-title">{dentistservice.category}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
