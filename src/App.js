
import './App.css';
import { inject } from '@vercel/analytics';
import {About, Contact, Experience, Footer, Header, Projects} from './containers';
import {Navbar} from './components';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

//  npm start
// vercel
let timeout; // Variable to track the timeout


function handleScroll() {
    if (timeout) clearTimeout(timeout);

    document.body.classList.add('scrollbar-visible');

    timeout = setTimeout(() => {
        document.body.classList.remove('scrollbar-visible');
    }, 1000); // Adjust the delay as needed
}

window.addEventListener('scroll', handleScroll);

// Attach the event listener to the scroll event
window.addEventListener('scroll', handleScroll);

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
