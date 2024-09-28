import aboutImage from "../../assets/images/about.svg"

export const About = () => {
    return (
        <>
            <div id="about" className="items-center max-w-screen-xl min-h-screen sm:flex">
                <div className="p-10 sm:w-1/2">
                    <div className="object-center text-center image">
                        <img src={aboutImage} />
                    </div>
                </div>
                <div className="p-5 sm:w-1/2">
                    <div className="text">
                        <h2 className="my-4 text-3xl font-bold sm:text-4xl ">About <span className="text-primary">Our Clinic</span>
                        </h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque vel voluptatibus ut libero praesentium totam unde pariatur, quia exercitationem amet repudiandae quod accusantium minima voluptates doloribus tempore accusamus officia nihil enim id dolorem eius velit, ea cupiditate. Esse incidunt rerum facilis, voluptatem alias temporibus non repudiandae ab. Itaque expedita illo cum ut aut autem sapiente a, consectetur quaerat rerum vero, iste quidem, non ipsum est? Doloremque quam facere necessitatibus atque repudiandae nam veniam, ad labore officiis voluptas, velit quae culpa illum iste, provident repellat eaque corrupti aperiam quidem eligendi sequi esse? Quaerat, impedit. Deserunt iste sit eveniet.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
