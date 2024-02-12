import styles from './App.module.css';
import Header from '../components/Header';
import destaque from '../assets/destaque.jpg';
import noticia1 from '../assets/TEKKEN8.jpeg';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      
      <main class={styles.main}>
        <div class={styles.destaqueContainer}>
          <img src={destaque} alt="Notícia destaque" />
          <div class={styles.theme}>GUIA</div>
          <h1 class={styles.firstTitle}>THE WITCHER 3: DICAS PARA FINALIZAR O JOGO</h1>
        </div>
        
        <h2>ÚLTIMAS NOTÍCIAS:</h2>
        
        <section class={styles.news}>

          <div class={styles.noticia1}>
            <div class={styles.imageContainer}>
              <img src={noticia1} alt="Notícia 1" />
              <div class={styles.theme}>REVIEW</div>
            </div>
            <h1>Review: Tekken 8 tem tudo para ser o jogo de luta do ano</h1>
            <p>Tekken 8 cumpre o que promete com gráficos de nova geração, uma história cinematográfica e modos inovadores para os fãs. Confira a nossa review!</p>
          </div>

          <section>
            <div class={styles.noticias}>
              <img src={noticia1} alt="Notícia 1" />
              <h1>Review: Tekken 8 tem tudo para ser o jogo de luta do ano</h1>
              <img src={noticia1} alt="Notícia 1" />
              <h1>Review: Tekken 8 tem tudo para ser o jogo de luta do ano</h1>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
