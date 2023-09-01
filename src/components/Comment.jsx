import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/tkdsantos.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            
                            <strong>Daniel Santos</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">Cerca de 1 hora atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                  
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}