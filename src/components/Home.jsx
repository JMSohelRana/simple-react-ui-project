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
      </div>
    </>
  );
};

export default Home;
