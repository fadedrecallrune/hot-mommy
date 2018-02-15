import React from "react";
import "./Footer.css";
import logo from "../../assets/bhm.svg";
import Tada from "react-reveal/Tada";

// hotmommy.official@gmail.com

const Footer = () => (
  <div className="section-features">
    <hr className="footer-hr" />
    <Tada count={2}>
      <div className="footer-phone">
        <a style={{textDecoration:'none', color: 'black'}} href="tel:0971580809">
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
            href="https://www.facebook.com/HotMommyUa/"
          >
            <i className="fab fa-facebook fa-lg" />
          </a>
        </div>
        <div>
          <a
            className="footer-icon"
            target="_blank"
            href="https://www.instagram.com/hotmommy_ua/"
          >
            <i className="fab fa-instagram fa-lg" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
