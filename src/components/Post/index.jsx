import styles from "./Post.module.css"

function Post(props) {
    return (
        <a 
            class={styles.card}
            style={{
                width: `${props.width}em`,
            }}
        >   
            <div class={styles.imageContainer}>
                <img 
                    src={props.img}
                    alt="Notícia 1" 
                    style={{
                        width: `${props.width}em`
                    }}
                />
                <div class={styles.theme}>REVIEW</div>
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

export default Post;