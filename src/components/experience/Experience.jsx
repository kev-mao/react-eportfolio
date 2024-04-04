import React from 'react';
import './experience.css';

const Experience = ({title, company, location, date, description, imageUrl}) => {
  return (
    <div className="experience">
      <div className="experience-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="experience-description">
        <h2>{title}</h2>
        <p className="company">{company}</p>
        <p>{description}</p>
    </div>
    <div className="experience-description-loc-date">
        <p>{location}</p>
        <p>{date}</p>

    </div>

    </div>
  )
}

export default Experience