import "../CSS/MenuOpen.css";

export function MenuOpen({ closeMenu }) {
  return (
    <div className="links">
      <a href="#hero" onClick={closeMenu}>
        Home
      </a>

      <a href="#rockets" onClick={closeMenu}>
        Our Rocket
      </a>

      <a href="#testimonials" onClick={closeMenu}>
        Testimonials
      </a>

      <a href="#contact" onClick={closeMenu}>
        Contact Us
      </a>

      <a href="#footer" onClick={closeMenu}>
        Legal
      </a>
    </div>
  );
}
