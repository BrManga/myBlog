import React from "react";
import video from "./video1.mp4";
import github from "../../images/about/github.png";
import world from "../../images/about/world.png";
import "./About.scss";
function About() {
  return (
    <div className="banner">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
      <h2 >
        <span>foreSight</span>

        <div>
          <a href="https://github.com/BrManga">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.boramanga.com/">
            <img src={world} alt="world" />
          </a>
        </div>
      </h2>
    </div>
  );
}

export default About;
