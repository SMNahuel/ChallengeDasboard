import React, { useEffect } from "react";
import style from "./Card.module.css";
import Study from "../../assets/images/icon-study.svg";
import SelfCare from "../../assets/images/icon-self-care.svg";
import Social from "../../assets/images/icon-social.svg";
import Exercise from "../../assets/images/icon-exercise.svg";
import Work from "../../assets/images/icon-work.svg";
import Play from "../../assets/images/icon-play.svg";
import { Fondo } from "../../enum/backgrounCard";

const Image = { Study, "Self Care": SelfCare, Social, Exercise, Work, Play };

const Card = ({ card, time,  index}) => {
  const header = `style.${card.title}`;
  return (
    <div className={style.Container}>
      <div className={style.Work} style={{background: Fondo[index]} }>
        <img src={Image[card.title]}  id={index} alt="ImgHeader" className={style.Imagen} />
      </div>
      <div className={style.ContainerInfo}>
        <div className={style.Header}>
          <p>{card.title}</p>
          <p>...</p>
        </div>
        <div className={style.Info}>
          <h1>{card.timeframes[time].current} hrs</h1>
          <p>
            Last {time} - {card.timeframes[time].previous} hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
