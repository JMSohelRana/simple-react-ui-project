import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

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
          </p>
        </div>
      </div>
      <div className="home4">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
