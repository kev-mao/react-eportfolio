import React from 'react';
import './project.css';
import { FiGithub } from "react-icons/fi";

const Project = ({ title, technology, description, imageUrl, gitUrl }) => {
  return (
  <div className="project">
      <div className="project-description">
        <h2>{title}</h2>
        <p className="technology">{technology}</p>
        <p>{description}</p>
        <div className="git__button" href={gitUrl} >
          <a href={gitUrl}><FiGithub/></a>
        </div>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  )
}

export default Project