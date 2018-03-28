import React from "react";
import Fade from "react-reveal/Fade";
import "./loveText.css";

const LoveText = () => {
  return (
    <section className="section-lovetext">
      <div className="love-text-container">
        <Fade delay={300} bottom>
          <p className="love-heading">оплата и доставка</p>
        </Fade>
        <Fade delay={380} bottom>
          <div className='love-text' >
          <p>
            Вы можете купить подарочный набор Hot Mommy позвонив по телефону
            (097) 158 08 09. Мы с радостью поможем Вам в выборе подарка, и
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
