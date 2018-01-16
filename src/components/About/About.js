import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";


const About = ({ items }) => {
  return (
    <section className="about">
      <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
        <h2 className="heading-secondary">hot mommy text </h2>
      </ScrollAnimation>
      <div className="infoCard">
        {items.map(item => (
          <div key={item.id} className="card">
            <div className="card__side card__side--front">
              <img src={item.pic} alt='' className="card__image" />
              <div className=" card-details">
                <div className="card-name">
                  <span>{item.name}</span>
                </div>
                <div className="card-price">
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
            <div className="card__side card__side--back">
              <div className="card-intro">{item.disc}</div>
              <div className="card-info">
                <span>{item.contains}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
