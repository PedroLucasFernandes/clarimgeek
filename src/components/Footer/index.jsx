import styles from './Footer.module.css';
import { AiFillYoutube, AiFillInstagram } from 'solid-icons/ai';
import { FaBrandsTiktok, FaBrandsDiscord } from 'solid-icons/fa';
import logo from '../../assets/logo-branco.png';

function Footer(){
    return(
        <footer class={styles.footer}>
            <div class={styles.logo}>
            <img src={logo} alt="Logo" />
            </div>
            <div class={styles.medias}>
                <a href='https://www.youtube.com/channel/UCYb3xf-wmEwrg0hgx6EEjhg' target="_blank">
                    <AiFillYoutube size={44} style={{ display: 'block' }}/>
                </a>
                <a href='https://www.instagram.com/clarimgeekbr/' target="_blank">
                    <AiFillInstagram class={styles.icons} style={{ display: 'block' }} size={36}/>
                </a>
                <a href='https://www.tiktok.com/@clarimgeekbr?_t=8jq2ELfsLnK&_r=1' target="_blank">
                    <FaBrandsTiktok class={styles.icons} style={{ display: 'block' }} size={28}/>
                </a>
                <a href='https://discord.gg/pmsEmvQs6J' target="_blank">
                    <FaBrandsDiscord class={`${styles.icon} ${styles.lastIcon}`} style={{ display: 'block' }} size={36}/>
                </a>
            </div>
            <div class={styles.footerInfo}>
                <a href="">POLÍTICAS DE PRIVACIDADE</a>
                <div class={styles.divider}></div>
                <a href="">TERMOS E CONDIÇÕES</a>
                <div class={styles.divider}></div>
                <a href="">SUPORTE</a>
            </div>
            <div>
                <p>©2024 by Clarim Geek. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;