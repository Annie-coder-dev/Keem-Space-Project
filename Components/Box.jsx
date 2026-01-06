import "../CSS/box.css";

export function Box() {
  return (
    <div className="testimonies">
      <h1>Testimonials</h1>

      <div>
        <div className="box">
          <p className="text">
            keem has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </div>
        <p className="author">— wile E. Coyote, Genius</p>
      </div>

      <div>
        <div className="box">
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ea
            dolores ducimus et, quibusdam ullam neque fugiat eaque vel minus
            accusantium esse quas cum eligendi quam atque rerum quaerat fuga.
          </p>
        </div>
        <p className="author">— Marvin The Martian {"&"} K-9</p>
      </div>

      <div>
        <div className="box">
          <p className="text">
            I knew I not only wanted — I needed — Keem's infinity Rocket for my
            mission in space. Keem delivered in one day! Nothing says "Take me
            to your leader" like Keem's Infinity Rocket!
          </p>
        </div>
        <p className="author">— Buzz Lightyear</p>
      </div>
    </div>
  );
}
