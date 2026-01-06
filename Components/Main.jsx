import { Contact } from "./Contact";
import { Hero } from "./Hero";
import Rockets from "./Rockets";
import { Testimonials } from "./Testimonials";
import "../CSS/main.css"

export function Main () {
    return <main id="main">
        <Hero/>
        <Rockets/>
        <Testimonials/>
        <Contact/>
    </main>
}