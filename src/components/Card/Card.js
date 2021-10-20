import React from 'react';
import style from './Card.module.css';
import Study from '../../assets/images/icon-study.svg';
import SelfCare from '../../assets/images/icon-self-care.svg';
import Social from '../../assets/images/icon-social.svg';
import Exercise from '../../assets/images/icon-exercise.svg';
import Work from '../../assets/images/icon-work.svg';
import Play from '../../assets/images/icon-play.svg';

const Image = {Study,"Self Care": SelfCare, Social, Exercise, Work, Play}

const Card = ({card, time}) => {

    return(
        <div className={style.Container}>
            <div className={style.Img}>
                <img src={Image[card.title]} alt="ImgHeader" className={style.Imagen}/>
            </div>
            <div className={style.ContainerInfo}>
                <div className={style.Header}>
                    <p>{card.title}</p>
                    <p>...</p>
                </div>
                <div className={style.Info}>
                    <h1>{card.timeframes[time].current} hrs</h1>
                    <p>Last Week - {card.timeframes[time].previous} hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Card;