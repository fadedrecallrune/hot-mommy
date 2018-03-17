import React from "react";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";
import "./loveText.css";

const LoveText = () => {
  return (
    <section className="section-lovetext">
      <div className="love-text-container">
        <Fade delay={300} bottom>
          <h1 className="love-heading">Наше качество </h1>
        </Fade>
        <Fade delay={450} bottom>
          <div>
          <h2>Способы оплаты и доставки заказа</h2>
          <p>
            Вы можете купить подарочный набор Hot Mommy позвонив по телефону
            (097) 158 08 09. Мы с радостью поможем Вам в выборе подарка и
            предоставим всю интересующую информацию.{" "}
          </p>
          <br />
          <p>
            Доставка возможна курьером в любую точку города Киева с 9:00 до
            21:00. Стоимость доставки - 50 грн. Оплата товара осуществляется
            наличным (курьеру) или безналичным расчетом (на карту Приватбанка).{" "}
          </p>
          <br />
          <p>
            По Украине Вы можете получить заказ Новой почтой. Стоимость доставки
            по ценам курьерской службы. Оплата товара осуществляется безналичным
            расчетом (на карту Приватбанка) или наложенным платежом.
          </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default LoveText;
