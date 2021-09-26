import style from "./CardStyle.module.css";
import Work from "../../assets/images/icon-work.svg";

const CardElement = () => {
  return (
    <div className={style.Container}>
      <div className={style.Nav}>
        <img src={Work} alt="Ilustración" />
      </div>
      <div className={style.Content}>
        <div className={style.Header}>
          <h3>Work</h3>
          <button className={style.Button}>...</button>
        </div>
        <div className={style.Data}>
          <h1>32 hrs</h1>
          <p>Last weekend - 32 hrs</p>
        </div>
      </div>
    </div>
  );
};

export default CardElement;
