
import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { Stats } from '../components/stats'
import { Testimonial } from '../components/testimonial'
import { Footer } from '../components/footer'
import { About } from '../components/about'

export function Home() {
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Services />
            <Testimonial />
            <Footer />
        </div>
    )
}