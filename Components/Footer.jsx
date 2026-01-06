import "../CSS/footer.css";
import Links from "./Links";

export function Footer() {
  return (
    <footer id="footer">
      <p className="info">
        Keem Rocket-Powered Products, Inc.<span> 55 Astro Way</span>
      </p>
        <span>Fairfield, New Jersey 12345-5555</span>
        <span> Email: Inquires@belloharyourmidey.com</span>
        <span> Phone: +243 708-566-0421</span>

        <div className="navigate">
          <Links/>
        </div>
      <div className="aside">
        <span>copyright © 2024</span>
        <span> All Rights Reserved</span>
      </div>
    </footer>
  );
}
