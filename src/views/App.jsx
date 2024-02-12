import styles from './App.module.css';
import Header from '../components/Header';
import destaque from '../assets/destaque.jpg';
import noticia1 from '../assets/TEKKEN8.jpeg';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      
      <main class={styles.main}>
        <img src={destaque} alt="Notícia destaque" />
        
        <h2>ÚLTIMAS NOTÍCIAS:</h2>
        <section class={styles.news}>

          <div class={styles.noticia1}>
            <img src={noticia1} alt="Notícia 1" />
            <h1>Review: Tekken 8 tem tudo para ser o jogo de luta do ano</h1>
          </div>

          <section>
            <div class={styles.noticias}>
              <img src={noticia1} alt="Notícia 1" />
              <h1>Review: Tekken 8 tem tudo para ser o jogo de luta do ano</h1>
            </div>
            <div class={styles.noticias}>
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
