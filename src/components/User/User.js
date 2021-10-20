import React from "react";
import style from "./User.module.css";
import UserPhoto from "../../assets/images/image-jeremy.png";

const User = () => {
  const ChangeToTime = () => {};

  return (
    <div className={style.Container}>
      <div className={style.ContainerUser}>
        <img className={style.Imagen} src={UserPhoto} alt="ProfilePhoto" />
        <p>Report for</p>
        <h4>Nahuel Sanchez</h4>
      </div>
      <div className={style.ContainerTimer}>
        <p className={style.TimeSelector} onClick={() => ChangeToTime("daily")}>Daily</p>
        <p className={style.TimeSelector} onClick={() => ChangeToTime("weekly")}>Weekly</p>
        <p className={style.TimeSelector} onClick={() => ChangeToTime("monthly")}>Monthly</p>
      </div>
    </div>
  );
};

export default User;
