
import './App.css';
import { inject } from '@vercel/analytics';
import {About, Contact, Experience, Footer, Header, Projects} from './containers';
import {Navbar} from './components';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';

//  npm start
// vercel

function App() {
  inject();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Duration longer than the Loading animation
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className = "App fade-in">
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
