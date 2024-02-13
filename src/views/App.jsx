import styles from './App.module.css';
import Header from '../components/Header';
import destaque from '../assets/destaque.jpg';
import capa from '../assets/TEKKEN8.jpeg';
import Post from '../components/Post';
import Featured from '../components/Featured';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      
      <main class={styles.main}>
        
        <Featured img={destaque} theme="GUIA" title="THE WITCHER 3: DICAS PARA FINALIZAR O JOGO"/>

        <section class={styles.news}>
          <h2 class={styles.topics}>ÚLTIMOS ARTIGOS:</h2>
          <div class={styles.newsColumn}>
            <div class={styles.newsRow}>
              <Post
                img={capa}
                title="Review: Tekken 8 tem tudo para ser o jogo de luta dos ano"
                desc="Tekken 8 cumpre o que promete com gráficos de nova geração, 
                uma história cinematográfica e modos inovadores para os fãs. 
                Confira a nossa review!"
                />
              <div class={styles.columnGrid}>
                <Post
                    img={capa}
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                    width="24"
                    fontSize="1.5"   
                />
                <Post
                    img={capa}
                    title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                    width="24"
                    fontSize="1.5"
                />
              </div>
            </div>
            <div class={styles.rowGrid}>
              <Post
                  img={capa}
                  title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                  width="24"
                  fontSize="1.5"   
              />
              <Post
                  img={capa}
                  title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                  width="24"
                  fontSize="1.5"
              />                
              <Post
                  img={capa}
                  title="Review: Tekken 8 tem tudo para ser o jogo de luta do ano"
                  width="24"
                  fontSize="1.5"
              />
            </div>  
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;