import React from "react";
import Fade from "react-reveal/Fade";

import "./About.css";

const About = ({ items }) => {
  return (
    <section className="about">
      <Fade bottom>
        <h2 className="heading-secondary">Мастерская подарков</h2>
      </Fade>
      <Fade bottom>
        <div className="about-info">
          <p className='about-info-text' >
            Мастерская подарков Hot Mommy предлагает Вам Подарочные наборы для
            малышей и их прекрасных мам. Наш подарочный набор это идеальный
            подарок на рождение ребенка, на крестины малыша или просто подарок
            даже без повода! Выбирайте готовые подарочные наборы от нашей
            мастерской подарков, или создавайте Ваш идеальный подарок вместе с
            нами!
          </p>
        </div>
      </Fade>
      <div className="infoCard">
        {items.map(item => (
      <Fade bottom >
            <div key={item.id} className="card">
              <div className="card__side card__side--front">
                <img src={item.pic} alt="" className="card__image" />
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
            </Fade>
        ))}
      </div>
      
    </section>
  );
};

export default About;
