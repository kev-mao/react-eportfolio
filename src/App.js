
import './App.css';
import { inject } from '@vercel/analytics';
import {About, Contact, Experience, Footer, Header, Projects} from './containers';
import {Navbar} from './components';
//  npm start
// vercel

function App() {
  inject()
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />

      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
