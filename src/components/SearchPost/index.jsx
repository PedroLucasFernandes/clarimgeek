import styles from "./SearchPost.module.css";

function SearchPost(props) {
    return (
        <a 
            class={styles.card}
        >   
            <div class={styles.imageContainer}>
                <img 
                    src={props.img}
                    alt="Notícia 1" 
                    style={{
                        width: `${props.width}em`
                    }}
                />
                <div class={styles.theme}>{props.theme}</div>
            </div>
            
            <div class={styles.textDiv}>
                <h1 
                    class={styles.title}
                    style={{
                        "font-size": `${props.fontSize}em`
                    }}
                >
                    {props.title}
                </h1>
                <p
                    class={styles.description}
                >
                    {props.desc}
                </p>
            </div>
        </a>
    )
}

export default SearchPost;