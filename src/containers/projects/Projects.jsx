import React from 'react';
import './projects.css';
import { Project } from 'C:/Projects/Personal Website/portfolio/src/components/project/Project'

const Projects = () => {
  return (
    <div className = "project__project-section section__margin" id="prjts">
      <div className = "project__project-name">
        <Project />
      </div>
        
    </div>
  )
}

export default Projects