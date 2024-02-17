import Post from "../Post";
import capa from "../../assets/TEKKEN8.jpeg";
import styles from "./Trending.module.css";


function Trending(){
    return(
        <section class={styles.articles}>
            <h2 class={styles.topics}>EM ALTA:</h2>
            <div class={styles.articlesColumn}>
                <div class={styles.articlesRow}>
                    <Post
                        img={capa}
                        theme="REVIEW"
                        title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                        desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                        uma história cinematográfica e modos inovadores para os fãs. 
                        Confira a nossa review!"
                    />
                    <div class={styles.columnGrid}>
                        <Post
                            img={capa}
                            theme="REVIEW"
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                            width="24"
                            fontSize="1.5"   
                        />
                        <Post
                            img={capa}
                            theme="REVIEW"
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                            width="24"
                            fontSize="1.5"
                        />
                    </div>
                </div>
                <div class={styles.rowGrid}>
                    <Post
                        img={capa}
                        theme="REVIEW"
                        title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                        width="24"
                        fontSize="1.5"   
                    />
                    <Post
                        img={capa}
                        theme="REVIEW"
                        title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                        width="24"
                        fontSize="1.5"
                    />                
                    <Post
                        img={capa}
                        theme="REVIEW"
                        title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                        width="24"
                        fontSize="1.5"
                    />
                </div>  
            </div>
        </section>  
    );
}

export default Trending;