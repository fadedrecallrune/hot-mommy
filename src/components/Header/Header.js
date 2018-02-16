import React from "react";
import "./Header.css";
import logo from "../../assets/smallwhiteha.svg";

const Header = () => (
  <header className="header">
    <div className="flex-row logo-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="social-icon">
      <a
          style={{textDecoration:'none', color: 'white'}}
          href="tel:0971580809"
        >
        <i className="fas  fa-phone fa-lg" /> (097) 158-08-09
        </a>
      </div>
    </div>

    <div className="header__text-box">
      <h1 className="flex-col heading-primary">
        <span className="heading-primary--main">Hot Mommy</span>

        <p className="heading-primary--sub">
          Улыбнитесь, счастье Вам к лицу...
        </p>
      </h1>
    </div>
  </header>
);

export default Header;
