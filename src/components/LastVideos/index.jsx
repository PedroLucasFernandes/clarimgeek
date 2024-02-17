import styles from "./LastVideos.module.css";
import { AiFillYoutube } from 'solid-icons/ai';
import { FaBrandsTiktok } from 'solid-icons/fa';

function LastVideos(){
    return(
        <div class={styles.subColumn}>
            <h2 class={styles.topics}>ÚLTIMOS VÍDEOS:</h2>
            <div class={styles.videosContainer}>
                <iframe width="360" height="189" src="https://www.youtube.com/embed/ntr4fHIE1s0" frameborder="0" allowfullscreen></iframe>
                <iframe width="360" height="189" src="https://www.youtube.com/embed/wBfWLwp15Ak" frameborder="0" allowfullscreen></iframe>
                <iframe width="360" height="189" src="https://www.youtube.com/embed/tGWlSQKPMsA" frameborder="0" allowfullscreen></iframe>
                    
                <h2>Veja mais nas nossas redes:</h2>
                <div class={styles.medias}>
                    <a href='https://www.youtube.com/channel/UCYb3xf-wmEwrg0hgx6EEjhg' target="_blank">
                        <AiFillYoutube size={44} style={{ display: 'block' }}/>
                    </a>
                    <a href='https://www.tiktok.com/@clarimgeekbr?_t=8jq2ELfsLnK&_r=1' target="_blank">
                        <FaBrandsTiktok class={styles.icons} style={{ display: 'block' }} size={28}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastVideos;