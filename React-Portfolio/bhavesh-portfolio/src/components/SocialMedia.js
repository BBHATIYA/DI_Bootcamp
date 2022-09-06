import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/BBHATIYA"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="https://stackoverflow.com/users/#####/bhavesh-bhatiya"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <BsStackOverflow className="social-icon" />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="http://linkedin.com/in/bhavesh-bhatiya-982aa443"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="mailto:bhaveshbhatiya03@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;

// BsStackOverflow;
