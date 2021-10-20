import {useState} from 'react';
import Card from "./Card/Card";
import User from "./User/User";
import style from "./style.module.css";
import Data from "../assets/data.json";

const Container = () => {
  const [time, setTime] = useState("daily")
  return (
    <div className={style.Container}>
      <User time={time} setTime={setTime}/>
      <div className={style.Cards}>
        {Data.map((card) => {
          return <Card card={card} time={time}/>;
        })}
      </div>
    </div>
  );
};

export default Container;
