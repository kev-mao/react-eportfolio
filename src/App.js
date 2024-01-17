
import './App.css';
import { inject } from '@vercel/analytics';
import {About, Contact, Experience, Footer, Header, Projects} from './containers';
import {Navbar} from './components';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

//  npm start
// vercel

function App(){
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

    return(
    <div className = "App fade-in">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
        </div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeIn()}>
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer /> 
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      </div>
  );
}

export default App;
