import React from 'react';
import './projects.css';
import { Project } from '../../components'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Projects = () => {
  return (
    <div className = "projects__project-section section__margin" id="prjts">
      <div className = "projects__projects-heading">
        Projects
      </div>
      <div className = "projects__projects-body">
        <Project title="Mapping Algorithm Comparison" technology="Data Science - Python, pandas, SQL, RESTful APIs" description="A project using Python and pandas to analyze routing strategies of major mapping services, involving data collection from APIs such as Google Maps and Apple Maps, storage in a MySQL database, and statistical analysis to identify performance trends and variations between services."  imageUrl="https://i.pinimg.com/originals/1f/58/9e/1f589e5c9935587f3b7dbfca54da164f.gif" gitUrl={"https://github.com/kev-mao/map-routing-comparison"}/>
        <Project title="Resumer" technology="Software, Mobile Development - Java, Kotlin, XML, Android" description="An Android app for custom resume generation targetted towards new immigrants to Canada. Features user-friendly interfaces, step-by-step guidance, and multithreading for responsive interactions." imageUrl="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzAwOWpiOHY4ZWo5M2RlMGQxcWJud3A2aDJ3Yndla2pmeXhkOWZ4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nPTcjPivyDyFLc2YR8/giphy.gif" gitUrl={"https://github.com/kev-mao/GoA-Resumer"}/>
        <Project title="Pomorise" technology="Firmware, Hardware - Embedded C, STM32, Fusion360" description="A smart alarm clock and Pomodoro productivity timer built on an STM32 Microcontroller, programmed in C, featuring a custom 3D-printed enclosure, LCD display, user-customizable settings, and accelerometer-driven shake-to-snooze capability." imageUrl="https://i.imgur.com/ZvMVqjF.jpg" gitUrl={"https://github.com/kev-mao/ECE198-Pomorise"}/>
        <Project title="Arduino Numpad" technology="Firmware, Hardware - C, Fusion360" description="A custom designed, hand soldered numpad build on an ATmega32U4 Microcontroller, featuring customizable keymapping, reactive animations on an OLED display, and full N-key rollover functionality." imageUrl="https://i.imgur.com/5r7HT9G.jpeg"/>
      </div>
        
    </div>
  )
}

export default Projects