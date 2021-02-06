import logo from './logo.svg';
import './App.css';
import btn from './btn';
import Bio from './Bio/Bio';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <btn /> */}
      <Hero />
      <Bio />
      <br></br>
      <Skills />
      <br></br>
      <Portfolio />
      <br></br>
      <Footer />
      
            </div>
  );
}

export default App;
