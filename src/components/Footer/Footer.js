import React from "react";
import "./Footer.css";
import logo from "../../assets/bhm.svg";
import Tada from "react-reveal/Tada";

const Footer = () => (
  <div className=" flex-col section-features">
    <hr className="footer-hr" />

    <Tada count={2} delay={1000}>
      <div className="flex-row footer-phone">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="tel:0971580809" >
          <i className="fas  fa-phone fa-lg" /> (097) 158-08-09
        </a>
      </div>
    </Tada>

    <div className="flex-row contacts-section">
      <img src={logo} alt="logo" className="contact-logo" />
      <div className="flex-row">
        <div>
          <a
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/HotMommyUa/" >
            <i className="fab fa-facebook fa-lg" />
          </a>
        </div>

        <div>
          <a
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/hotmommy_ua/" >
            <i className="fab fa-instagram fa-lg" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
