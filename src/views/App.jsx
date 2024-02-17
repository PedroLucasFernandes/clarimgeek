import styles from './App.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Routes from '../routes/Routes';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;