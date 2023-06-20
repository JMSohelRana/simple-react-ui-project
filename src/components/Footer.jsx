import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>J.M. Sohel Rana</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>follow Us</h5>
        <div>
          <a
            href="https://www.youtube.com/channel/UCUwcuNjXzUMyxMYkjci0TIg"
            target="blank"
          >
            <AiFillYoutube></AiFillYoutube>Youtube
          </a>
          <a
            href="https://www.linkedin.com/in/jm-sohel-rana-4138bb229/"
            target="blank"
          >
            <AiFillLinkedin></AiFillLinkedin>LinkeDin
          </a>
          <a href="https://github.com/JMSohelRana" target="blank">
            <AiFillGithub></AiFillGithub>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
