import React from 'react';
import './experiences.css';
import {Experience} from '../../components'

const Experiences = () => {
  return (
    <div className = "experience__section section__margin" id="exp">
      <div className = "experience__section-heading">
        Experience
      </div>
      <Experience title="Junior Technical Analyst" company="Ontario Ministry of Transportation" description="Led the upgrade of Java MVC applications to enhance security and code maintainability. Worked in an Agile-Scrum environment using Azure DevOps for CI/CD pipelines. Developed solutions to meet accessibility standards and created a Code Wiki that significantly improved onboarding efficiency. Initiated a shift to Azure Key Vault for secure management of secret properties." imageUrl="https://i.imgur.com/zxQBtCG.jpeg"/>
        <Experience title="Firmware Developer" company="UWaterloo Formula Electric"  description="Developed hardware-in-the-loop (HIL) tests with Python to validate custom Battery Management Unit firmware. Debugged firmware in C by analyzing code, schematics, and signal paths. Worked with STM32, VirtualBox, and Vagrant to map code logic to firmware inputs. Designed proof of concepts for RTOS-based vehicle dashboards using Python and LVGL.






" imageUrl="https://avatars.githubusercontent.com/u/139183579?s=200&v=4"/>
        <Experience title="Mobile Developer" company="Game of Apps" description="Developed Android apps using Java and XML in Android Studio for volunteering, bill-splitting, and custom resume generation. Worked in an Agile-Scrum environment, following the full Android development lifecycle from conception to deployment. Conducted user interviews and performed real-world testing to refine user experience." imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSf8yDgvcXM0ztcNwo8baYxMFwb3hQEh9l40gP24OJQ&s"/>

    </div>
  )
}

export default Experiences