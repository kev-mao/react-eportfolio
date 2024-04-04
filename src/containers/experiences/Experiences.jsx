import React from 'react';
import './experiences.css';
import {Experience} from '../../components'

const Experiences = () => {
  return (
    <div className = "experience__section section__margin" id="exp">
      <div className = "experience__section-heading">
        Experience
      </div>
        <Experience title="Firmware Developer" company="UWaterloo Formula Electric"  description="Developed Python-based hardware-in-the-loop (HIL) simulations for electric vehicle component validation, analyzing firmware and schematics to identify variables and functions. Utilized STM32CubeMX, VirtualBox, and Vagrant to correlate code with firmware inputs. Currently working on an RTOS-based dashboard display system for the vehicle." imageUrl="https://avatars.githubusercontent.com/u/139183579?s=200&v=4"/>
        <Experience title="Mobile Developer" company="Game of Apps" description="Developed Android apps using Java and XML in Android Studio for volunteering, bill-splitting, and custom resume generation. Worked in an Agile-Scrum environment, following the full Android development lifecycle from conception to deployment. Conducted user interviews and performed real-world testing to refine user experience." imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSf8yDgvcXM0ztcNwo8baYxMFwb3hQEh9l40gP24OJQ&s"/>
    </div>
  )
}

export default Experiences