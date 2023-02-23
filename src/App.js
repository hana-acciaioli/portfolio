import './App.css';
import About from './components/About/About.js';
import Footer from './components/Layout/Footer/Footer.js';
import Header from './components/Layout/Header/Header.js';
import NavBar from './components/Layout/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
