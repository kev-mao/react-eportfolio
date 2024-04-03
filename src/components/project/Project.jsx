import React from 'react';
import './project.css';

const Project = ({ title, technology, description, imageUrl, gitUrl }) => {
  return (
  <div className="project">
      <div className="project-description">
        <h2>{title}</h2>
        <p className="technology">{technology}</p>
        <p>{description}</p>
        <div className="git__button" href={gitUrl} >
          <a href={gitUrl}> Github</a>
        </div>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  )
}

export default Project