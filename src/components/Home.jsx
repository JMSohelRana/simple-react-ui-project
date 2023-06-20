import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>StarNet</h1>
          <p>Solution of all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur accusantium tempora repellendus hic. Unde quo voluptate
            quod quam ex eveniet placeat similique, quia blanditiis sed!
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Who we are?</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            officia perferendis? Optio eum cum expedita sed! In corrupti aliquid
            placeat illum quod recusandae odio ipsum adipisci unde, minus
            dignissimos magni laudantium, optio, impedit rerum fugit vel
            asperiores excepturi. Maiores excepturi omnis sit, aut quae maxime
            voluptatem vero minus ex mollitia quod corrupti quis necessitatibus
            quisquam nisi dicta sint possimus dolor. Velit sit tempora saepe
            illum accusamus mollitia consectetur similique debitis illo beatae
            et suscipit quod quia earum, dolorem minima asperiores excepturi?
            Labore eum tempora sint, odio deleniti atque optio earum distinctio,
            ipsam animi molestias blanditiis assumenda at suscipit minima rerum?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
