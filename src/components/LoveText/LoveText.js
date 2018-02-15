import React from "react";
import ReactPlayer from 'react-player'
import Fade from "react-reveal/Fade";
import "./loveText.css";

const LoveText = () => {
  return (
      <section className='section-lovetext'>
    <div className="love-text-container">
    <Fade bottom>
    
      <h1 className='love-heading' >Наше качество </h1>
      </Fade>
    <Fade bottom>
      
      <p className="love-text">
        Мастерская подарков Hot Mommy предлагает Вам Подарочные наборы для
        малышей и их прекрасных мам. Наш подарочный набор это идеальный подарок
        на рождение ребенка, на крестины малыша или просто подарок даже без
        повода! Выбирайте готовые подарочные наборы от нашей мастерской
        подарков, или создавайте Ваш идеальный подарок вместе с нами!
      </p>
      </Fade>
      <div className='player-wrapper'>
      <ReactPlayer className='video' width='100%' height='100%' url='https://vimeo.com/73314057' volume={0.2} />
      </div>
    </div>
    </section>
  );
};

export default LoveText;
