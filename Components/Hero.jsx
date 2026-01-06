import "../CSS/hero.css";

export function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="herocontent">
        <img src="/rocketdab.webp" alt="" className="dab" />
        <div className="paragraph">
          <h2>
            We Boldy Go <span style={{ color: "Blue" }}>Where No Rocket</span>{" "}
            Has Gone Before...
          </h2>
          <p className="about">
            We're building rockets for the next century today, from the moon to
            Mars, jupiter and beyond
          </p>
          <p className="motto">Think Acme Rocket</p>
        </div>
      </div>
    </div>
  );
}
