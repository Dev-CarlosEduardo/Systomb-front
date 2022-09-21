import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import user from '../../assets/User.png';
// import key from '../../assets/Key.png';

export function Home() {
  return (
    <div className={styles.container}>
      <form action="">
        <img src="https://picsum.photos/id/1028/200" alt="" />

        <h1>LOGIN</h1>

        <div className={styles.inputForm}>
          <div className={styles.contentImg}>
            <img src="assets/User.png" alt="Login" />
          </div>
          <input type="email" placeholder="Digite seu usuário" />
        </div>

        <div className={styles.inputForm}>
          <div className={styles.contentImg}>
            <img src="assets/Key.png" alt="Login" />
          </div>
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <div className={styles.inputForm}>
          <a href="/">ENTRAR</a>
        </div>

        <p>NÂO TEM CADASTRO?</p>
      </form>
    </div>
  );
}
