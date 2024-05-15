import React from 'react';
import './contact.css';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

const Contact = () => {
  return (
    <div className="contact-bubble-row" id="contact">
    <a href="https://www.linkedin.com/in/kev-mao/" className="contact-bubble linkedin">
      <SocialIcon network="linkedin"/>
    </a>
    <a href="https://github.com/kev-mao" className="contact-bubble github">
      <SocialIcon network="github"/>
    </a>
    <a href="mailto:k2mao@uwaterloo.ca" className="contact-bubble email">
      <SocialIcon network="email"/>
    </a>
  </div>
  )
}

export default Contact