import React from "react";
import "./hero.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import main from "../../assets/linkedin_img.jpg";
import Skills from "../../components/skills/Skills";
const Hero = () => {
  return (
    <section className="myPortfolio__hero" id="home">
      <div className="container">
        <div className="hero__main">
          <div className="hero-text">
            <h1>Front-End React Developer 👋</h1>
            <p>
              Hi, I am Hemang Bairwa, Passionate Frontend Developer, Final Year CSE Student
              from Rajasthan, India. 📍
            </p>
            <span>
              <a href="https://twitter.com/Hemang_Bairwa" target="_blank">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </a>
              <a
                href="https://www.linkedin.com/in/-hemangb"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href="https://github.com/hemang-2001" target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
            </span>
          </div>
          <div className="hero-image vibrate-1">
            <img src={main} alt="Main-Image" className="main-img" />
          </div>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
};

export default Hero;
