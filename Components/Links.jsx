import "../CSS/links.css"

export default function Links ({closeMenu}) {
    return <div className="nav">
        <a href="#rockets" className="a" onClick={closeMenu}>Our Rocket</a>
        <a href="#testimonials" className="a" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" className="a" onClick={closeMenu}>Contact Us</a>
    </div>
}