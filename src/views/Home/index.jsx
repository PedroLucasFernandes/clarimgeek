import destaque from '../../assets/destaque.jpg';
import Featured from '../../components/Featured';
import LastArticles from '../../components/LastArticles';
import LastReviews from '../../components/LastReviews';
import Trending from '../../components/Trending';
import styles from './Home.module.css';

export default function Home(){
    return(
        <main class={styles.main}>
            <Featured img={destaque} theme="GUIA" title="THE WITCHER 3: DICAS PARA FINALIZAR O JOGO"/>
            <Trending />
            <LastReviews />
            <LastArticles />
        </main>
    );
}