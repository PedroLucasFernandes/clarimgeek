import Post from "../Post";
import styles from "./LastReviews.module.css";
import capa from "../../assets/TEKKEN8.jpeg";

function LastReviews(props) {
    return(
        <div style={{ "background-color":"#252323" }}>
            <section class={styles.reviews}>
                <div class={styles.reviewsRow}>
                    <div class={styles.mainColumn}>
                        <div class={styles.mainCallRow}>
                            <h2>ÚLTIMAS REVIEWS:</h2>
                            <h2>VER MAIS</h2>
                        </div>   
                        <Post 
                            img={capa}
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                            desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                            uma história cinematográfica e modos inovadores para os fãs. 
                            Confira a nossa review!"
                            />
                        <div class={styles.mainRow}>
                            <Post 
                                img={capa}
                                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                                width="24"
                                fontSize="1.5" 
                                />
                            <Post 
                                img={capa}
                                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                                width="24"
                                fontSize="1.5" 
                                />
                        </div>
                    </div>
                    <div style={{
                        width: "1px",
                        "background-color": "white",
                        margin: "2em 0" 
                    }} /> {/*Divider*/}
                    <div class={styles.subColumn}>
                        <h2>ÚLTIMAS NOTÍCIAS:</h2>
                        <Post 
                            img={capa}
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                            width="24"
                            fontSize="1.5" 
                            />
                        <Post 
                            img={capa}
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                            width="24"
                            fontSize="1.5" 
                            />
                        <Post 
                            img={capa}
                            title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                            width="24"
                            fontSize="1.5" 
                            />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LastReviews;