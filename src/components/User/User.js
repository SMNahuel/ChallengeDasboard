import React from "react";
import style from "./User.module.css";
import UserPhoto from "../../assets/images/user-photo.jpg";

const User = ({ setTime }) => {
  
  const ChangeToTime = (time) => {
    setTime(time);
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerUser}>
        <img className={style.Imagen} src={UserPhoto} alt="ProfilePhoto" />
        <div className={style.UserInfo}>
          <p>Usuario</p>
          <h4>Nahuel Sanchez</h4>
        </div>
      </div>
      <div className={style.ContainerTimer}>
        <p className={style.TimeSelector} onClick={() => ChangeToTime("daily")}>
          Daily
        </p>
        <p
          className={style.TimeSelector}
          onClick={() => ChangeToTime("weekly")}
        >
          Weekly
        </p>
        <p
          className={style.TimeSelector}
          onClick={() => ChangeToTime("monthly")}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default User;
