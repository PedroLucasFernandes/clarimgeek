import { createSignal } from 'solid-js';
import { Show } from 'solid-js/web';
import styles from './Header.module.css';
import capa from '../../assets/capa-clarim.png';
import { AiOutlineSearch, AiFillYoutube, AiFillInstagram } from 'solid-icons/ai';
import { FaBrandsTiktok } from 'solid-icons/fa';

function Header(){

    const [searchOpen, setSearchOpen] = createSignal(false);

    const handleSearchClick = () => {
        setSearchOpen(prevState => !prevState);
    };

    return (
        <header class={styles.header}>
            <img src={capa} alt="logo"/>
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

            <AiFillYoutube size={44}/>
            <AiFillInstagram class={styles.icons} size={36}/>
            <FaBrandsTiktok class={styles.icons} size={28}/>
        </header>
    );
}

export default Header;