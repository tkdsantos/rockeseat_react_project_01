import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/tkdsantos.png" />
                    <div className={styles.authorInfo}>
                        <strong>Daniel Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">Publica há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera, acabei de subir um novo projeto em meu Portfolio. É um projeto que eu fiz no NLW return</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei o seu feedback</strong>
                <textarea placeholder="Deixe o seu comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

        </article>
    )
}