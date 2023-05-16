import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ellenbessa.png" alt="" />

      <div className={styles.commentbox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <strong>Ellen Bessa</strong>
              <time dateTime="11 de Maio ás 08:13h">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={28} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
