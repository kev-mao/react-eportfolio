import React from 'react';
import './projects.css';
import { Project } from '../../components'

const Projects = () => {
  return (
    <div className = "projects__project-section section__margin" id="prjts">
      <div className = "projects__projects-heading">
        Projects
      </div>
      <div className = "projects__projects-body">
        <Project title="Mapping Algorithm Comparison" technology="Data Science - Python, pandas, SQL, RESTful APIs" description="Developed a project using Python and pandas to analyze routing strategies of major mapping services, involving data collection from APIs like Google Maps and Apple Maps, storage in a MySQL database, and statistical analysis to identify performance trends and variations between services."  imageUrl="https://i.pinimg.com/originals/1f/58/9e/1f589e5c9935587f3b7dbfca54da164f.gif" gitUrl={"https://github.com/kev-mao/map-routing-comparison"}/>
        <Project />
        <Project />
      </div>
        
    </div>
  )
}

export default Projects