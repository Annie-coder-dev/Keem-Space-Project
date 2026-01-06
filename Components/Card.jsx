import "../CSS/card.css"

export function Cards() {
  return (
    <div className="cards">

      <div className="card">
        <img src="/rocketdab.webp" alt="" width= "200px" />
        <h4>Explorer</h4>
        <p>Affordable Exploration</p>
      </div>

      <div className="card">
          <img src="/rocketrider.webp" alt=""  width= "200px" />
          <h4>Adventurer</h4>
          <p>Best Selling Rocket!</p>
      </div>
      <div className="card">
          <img src="/rocketlaunch.webp" alt=""  width= "200px" />
          <h4>Infinity</h4>
          <p>Luxury SpaceShip</p>
      </div>
    </div>
  );
}
