import React from "react";
import "./about.css";
// import about from "../../assets/about.avif";
const About = () => {
  return (
    <section className="myPortfolio__about special" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <img
              src={"https://i.ibb.co/drtCQ8p/e030bb1c1fd5bec7ede684b44f808b1b.jpg"}
              alt="A Teen is Coding on Laptop"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <h3>ABOUT ME</h3>
            <h2>Passionate Frontend Developer | Final Year CSE Student from Rajasthan, India📍</h2>
            <p>
            Hello! I am a passionate Frontend Developer and a final year Computer Science Engineering (CSE) student with a strong command over an extensive range of technologies, including HTML, CSS, JavaScript, ReactJS, MongoDB, NodeJS, Tailwind CSS, Material UI, and Bootstrap. With these skills, I design and maintain responsive websites that offer seamless user experiences.
            My main focus lies in creating captivating user interfaces through clean and optimized code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
