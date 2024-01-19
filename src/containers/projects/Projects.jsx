import React from 'react';
import './projects.css';
import { FaSquareGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className = "project__name section__padding" id="home">
      <div className = "project-content">
        <h1> 
        Project Name
        </h1>
        <p>
        Developed and implemented a smart alarm clock and productivity timer utilizing C on a STM32 Microcontroller
        Documented design requirements through a Project Proposal, Design Document, and Implementation Demo
        Utilized Autodesk Fusion 360 to create detailed models for 3D-printing
        Implemented collaborative version control through GitHub
        </p>
        <a href="https://github.com/kev-mao">
        <FaSquareGithub/>Github

        </a>
      </div>
      <div className="project-image">
        <img src={"https://i.stack.imgur.com/a5FFn.jpg"} />
      </div>
    </div>
  )
}

export default Projects