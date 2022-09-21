import { Link } from "react-router-dom";
import styles from "./form.module.scss";
import { states } from "../../data/states";
import { countries } from "../../data/countries";

export function Form() {

  const st = states;
  const ct = countries;

  return (
    <div className={styles.container}>
      <div className={styles.asidebar}>
        <h1>BEM VINDO</h1>
        <div className={styles.avatar}>
          <img src="https://picsum.photos/id/1028/200" alt="" />
        </div>

        <p>USUARIO</p>
        <nav className={styles.nav}>
          <a href="#">SEPULTAMENTO</a>
          <a href="#">CONSULTAR</a>
          <div className={styles.bottom}>
            <a href="#">SAIR</a>
          </div>
        </nav>
      </div>

      <form>
        <div className={styles.inputFiels}>
          <div className={styles.left}>
          <h1>Título</h1>
          <label>Código</label>
          <input type="text" />

          <label>Nome</label>
          <input type="text" />

          <label>Idade</label>
          <input type="text" />
          <label>Sexo</label>
          <input type="radio" />
          masculino
          <input type="radio" />
          feminino
          <br />
          <label>Naturalidade</label>
          <input type="text" />
          <label>Estado</label>
          <select id="estado" name="estado">
            {
              st.map((item)=>(
                <option value={item.value} key={item.id}>{item.title}</option>
              ))
            }
            {/* // estados */}
          </select>
          <label>Nacionalidade</label>
          <select name="paises" id="paises">
            {
              st.map((item)=>(
                <option value={item.value} key={item.id}>{item.title}</option>
              ))
            }
            {/* Paises */}
          </select> <br />
          <label>Data Nascimento</label>
          <input type="date" />
          <label>Data Falecimento</label>
          <input type="date" /><br />
          <label>Data Enterro</label>
          <input type="date" />
          <label>Horario Velório</label>
          <input type="time" /><br />
          <label>Horario Enterro</label>
          <input type="time" /> <br />

          </div>

          <div className={styles.right}>
          <img src="https://picsum.photos/id/1028/200" alt="" />
          </div>  
        </div>
        

        <div className={styles.inputFiels}>
          <div>
            <h1>Título</h1>
            <label>Proprietário</label>
            <input type="text" />
            <label>Numero</label>
            <input type="text" />
            <label>Quadra</label>
            <input type="text" />
            <label>Rua</label>
            <input type="text" />
            <label>Zona</label>
            <input type="text" />
            <label>Agência Funeraria</label>
            <select>
              <option value=""></option>
              <option value="">Bragantina</option>
              <option value="">Cristo Rei</option>
              <option value="">Motta</option>
              <option value="">Rossi</option>
              <option value="">Leme</option>
              <option value="">Moreno</option>
            </select>
            <label>Coveiro</label>
            <select>
              <option value=""></option>
              <option value="">Jõao</option>
              <option value="">Manuel</option>
              <option value="">José</option>
              <option value="">Geraldo</option>
            </select>
            <input type="text" />
            <label>Observações</label>
            <textarea name="" id="" />
          </div>         
        </div>

        <img src="https://picsum.photos/id/1028/200" alt="" />

        <div className={styles.buttonFields}>
          <button>Limpar</button>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
