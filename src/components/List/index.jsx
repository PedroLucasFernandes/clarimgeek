import SearchPost from '../SearchPost';
import capa from "../../assets/TEKKEN8.jpeg";
import styles from './List.module.css';

const params = {
    width: "24",
    fontSize: "2"
}

export default function List(){
    return(
        <div>
            <h1>Resultado para a busca: "".</h1>
            <div class={styles.list}>    
                <SearchPost 
                    img={capa}
                    theme="REVIEW"
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                    desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                    uma história cinematográfica e modos inovadores para os fãs. 
                    Confira a nossa review!"
                    {...params}
                    />
                <SearchPost 
                    img={capa}
                    theme="REVIEW"
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                    desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                    uma história cinematográfica e modos inovadores para os fãs. 
                    Confira a nossa review!"
                    {...params}
                    />
                <SearchPost 
                    img={capa}
                    theme="REVIEW"
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                    desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                    uma história cinematográfica e modos inovadores para os fãs. 
                    Confira a nossa review!"
                    {...params}
                    />
                <SearchPost 
                    img={capa}
                    theme="REVIEW"
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                    desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                    uma história cinematográfica e modos inovadores para os fãs. 
                    Confira a nossa review!"
                    {...params}
                    />
            </div>
        </div>
    );
}