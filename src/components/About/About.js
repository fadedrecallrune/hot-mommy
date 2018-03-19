import React from "react";
import Fade from "react-reveal/Fade";

import "./About.css";

const About = ({ items }) => {
  return (
    <section className="about">
      <Fade bottom>
        <h2 className="heading-secondary">Мастерская подарков</h2>
      </Fade>
      <Fade bottom >
        <div className="about-info">
          <p className="about-info-text">
            Хотите выбрать идеальный подарок на рождение ребенка, подарок на
            крестины или просто хотите порадовать малыша? Тогда Вы по адресу! В
            нашей мастерской Вы можете выбрать как готовый подарочный набор, так
            и составить его самостоятельно, наполнив дизайнерский бокс от Hot
            Mommy выбранной продукцией! В такой коробке приятно как дарить, так
            и получать подарки!
          </p>
          <p className="about-info-text">
            И перед тем, как приступите к выбору подарка, улыбнитесь, ведь
            Счастье Вам к лицу!!!
          </p>
        </div>
      </Fade>
      <div className="infoCard">
        {items.map(item => (
          // <Fade key={item.id} bottom delay={100}>
            <div key={item.id} className="card">
              <div className="card__side flex-col card__side--front">
                <img src={item.pic} alt="" className="card__image" />
                <div className="flex-col card-details">
                  <div className="card-name">
                    <span>{item.name}</span>
                  </div>
                  <div className="card-price">
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
              <div className="card__side flex-col card__side--back">
                <div className="card-intro">{item.disc}</div>
                <div className="card-info">
                  <span>{item.contains}</span>
                </div>
              </div>
            </div>
          // </Fade>
        ))}
      </div>
    </section>
  );
};

export default About;
