import styles from './App.module.css';
import Header from '../components/Header';
import destaque from '../assets/destaque.jpg';
import Featured from '../components/Featured';
import LastArticles from '../components/LastArticles';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      
      <main class={styles.main}>
        
        <Featured img={destaque} theme="GUIA" title="THE WITCHER 3: DICAS PARA FINALIZAR O JOGO"/>

        <LastArticles/>
      </main>
    </div>
  );
}

export default App;