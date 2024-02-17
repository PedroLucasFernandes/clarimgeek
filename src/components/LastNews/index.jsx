import Post from "../Post";
import styles from "./LastNews.module.css";
import capa from "../../assets/TEKKEN8.jpeg";

function LastNews(){
    return(
        <div class={styles.subColumn}>
            <h2 class={styles.topics}>ÚLTIMAS NOTÍCIAS:</h2>
            <Post 
                img={capa}
                theme="NOTÍCIA"
                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                width="24"
                fontSize="1.5" 
                />
            <Post 
                img={capa}
                theme="NOTÍCIA"
                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                width="24"
                fontSize="1.5" 
                />
            <Post 
                img={capa}
                theme="NOTÍCIA"
                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                width="24"
                fontSize="1.5" 
                />
        </div>
    );
}

export default LastNews;