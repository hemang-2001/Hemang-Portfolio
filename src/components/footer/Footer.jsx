import React from "react";
import "./footer.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="myPortfolio__footer">
      <div className="container1">
        <div className="footer">
          <h2>© Hemang Bairwa 2023 </h2>
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
      </div>
    </footer>
  );
};
export default Footer;
