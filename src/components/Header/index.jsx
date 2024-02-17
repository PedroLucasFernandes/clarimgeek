import { createSignal } from 'solid-js';
import { Show } from 'solid-js/web';
import styles from './Header.module.css';
import capa from '../../assets/capa-clarim.png';
import { AiOutlineSearch, AiFillYoutube, AiFillInstagram } from 'solid-icons/ai';
import { FaBrandsTiktok, FaBrandsDiscord } from 'solid-icons/fa';

function Header(){

    const [searchOpen, setSearchOpen] = createSignal(false);

    const handleSearchClick = () => {
        setSearchOpen(prevState => !prevState);
    };

    return (
        <header class={styles.header}>
            <a><img src={capa} alt="logo"/></a>
            <nav class={styles.nav}>
                <a href="">PÁGINA INICIAL</a>
                <a href="">NOTÍCIAS</a>
                <a href="">REVIEWS</a>
                <a href="">VÍDEOS</a>
            </nav>

            <div class={`${styles.searchContainerClose} ${searchOpen() ? styles.searchContainerOpen : ''}`}>
                <Show when={searchOpen()}>
                    <input
                        type="text"
                        placeholder="O que você procura?"
                        class={`${styles.searchInput} ${searchOpen() ? styles.searchInputOpen : ''}`}
                    />
                </Show>
                <AiOutlineSearch class={styles.searchIcon} size={36} onClick={handleSearchClick}/>
            </div>

            <div class={styles.divider}></div>

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
        </header>
    );
}

export default Header;