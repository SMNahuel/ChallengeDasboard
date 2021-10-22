import style from './Login.module.css';

const Login = () => {


    return(
        <div className={style.Container}>
            <div className={style.InputContainer}>
                <input type="email" className={style.Login}/>
                <label className={style.LabelPassword}>
                    <input type="password" className={style.passowrd}/>
                </label>
                
            </div>
        </div>
    )
}

export default Login;