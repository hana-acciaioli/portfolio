import './App.css';
import About from './components/About/About.js';
import Footer from './components/Layout/Footer/Footer.js';
import Header from './components/Layout/Header/Header.js';
import NavBar from './components/Layout/NavBar/NavBar.js';
import Work from './components/Work/Work.js';
import Contact from './components/Contact/Contact.js';
import Resume from './components/Resume/Resume.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
