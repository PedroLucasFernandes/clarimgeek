import styles from './Header.module.css';
import capa from '../../assets/capa-clarim.png';
import { AiOutlineSearch, AiFillYoutube, AiFillInstagram } from 'solid-icons/ai';
import { FaBrandsTiktok } from 'solid-icons/fa';

function Header(){
    return (
        <header class={styles.header}>
            <img src={capa} alt="logo"/>
            <a href="">PÁGINA INICIAL</a>
            <a href="">NOTÍCIAS</a>
            <a href="">REVIEWS</a>
            <a href="">VÍDEOS</a>

            <AiOutlineSearch class={styles.search} size={36}/>
            <div class={styles.divider}></div>
            <AiFillYoutube size={44}/>
            <AiFillInstagram class={styles.icons} size={36}/>
            <FaBrandsTiktok class={styles.icons} size={28}/>
        </header>
    );
}

export default Header;