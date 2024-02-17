import Post from "../Post";
import styles from "./LastArticles.module.css";
import capa from "../../assets/TEKKEN8.jpeg";
import { AiFillYoutube } from 'solid-icons/ai';
import { FaBrandsTiktok } from 'solid-icons/fa';
import LastVideos from "../LastVideos";

function LastArticles(props) {
    return(
        <div>
            <section class={styles.articles}>
                <div class={styles.articlesRow}>
                    <div class={styles.mainColumn}>
                        <div class={styles.mainTopicsRow}>
                            <h2 class={styles.topics}>ÚLTIMOS ARTIGOS:</h2>
                            <a href="" class={styles.viewMore}>VER MAIS</a>
                        </div>   
                        <Post 
                            img={capa}
                            theme="REVIEW"
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                            desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                            uma história cinematográfica e modos inovadores para os fãs. 
                            Confira a nossa review!"
                            />
                        <div class={styles.mainRow}>
                            <Post 
                                img={capa}
                                theme="REVIEW"
                                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                                width="24"
                                fontSize="1.5" 
                                />
                            <Post 
                                img={capa}
                                theme="REVIEW"
                                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                                width="24"
                                fontSize="1.5" 
                                />
                        </div>
                    </div>
                    <div style={{
                        width: "1px",
                        "background-color": "black",
                        margin: "2em 0" 
                    }} /> {/*Divider*/}
                    <LastVideos />
                </div>
            </section>
        </div>
    );
}

export default LastArticles;