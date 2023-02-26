import { useState } from "react";
import Card from "./Card/Card";
import User from "./User/User";
import style from "./style.module.css";
import Data from "../assets/data.json";

const Container = () => {
  const [time, setTime] = useState("daily");

  /* 
  TODO LO QUE SEA VISUALIZACIÓN DE COMPONENTES VA SIEMPRE
  ENTRE LOS PARENTESIS DEL RETURN
  */
  return (
    <div className={style.Container}>
      <User time={time} setTime={setTime} />
      <div className={style.Cards}>
        {Data.map((card /* {} */, index /* Number */) => {
          return <Card card={card} time={time} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Container;
