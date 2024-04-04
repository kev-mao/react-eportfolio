
import './App.css';
import { inject } from '@vercel/analytics';
import {About, Contact, Experiences, Footer, Header, Projects} from './containers';
import {Navbar} from './components';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';


//  npm start
// vercel
function App(){
  inject();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500); // Duration longer than the Loading animation
  }, []);

  if (loading) {
    return <Loading />;
  }

    return(
      <>  
        <div className = "App fade-in">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Projects />
      <Contact />
      <Footer /> 


    </div>  
          <Experiences />

    
        </>

  );
}

export default App;
