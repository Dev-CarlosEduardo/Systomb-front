import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.asidebar}>
        <h1>BEM VINDO</h1>
        <div className={styles.avatar}>
        <img src="https://picsum.photos/id/1028/200" alt="" />
        </div>
        
        <p>USUARIO</p>
        <nav className={styles.nav}>
          <a href="#">FERRAMENTAS</a>
          <a href="#">CONSULTAR</a>
          <div className={styles.bottom}>
            <a href="#">SAIR</a>
          </div>
        </nav>
      </div>
      <div className={styles.section}>
        <div className="logo">
          <img src="https://picsum.photos/id/1028/200" alt="" />
        </div>
      </div>
    </div>
  );
}
