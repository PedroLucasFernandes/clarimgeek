import styles from './Featured.module.css';

function Featured(props){
    return(
        <a>
            <div class={styles.featuredContainer}>
                <img src={props.img} alt="Notícia destaque" />
                <div class={styles.theme}>{props.theme}</div>
                <h1 class={styles.firstTitle}>{props.title}</h1>
            </div>
        </a>
    );
}

export default Featured;