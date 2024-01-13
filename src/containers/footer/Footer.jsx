import React from 'react';
import './footer.css';
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="credits">
      <p><a href="https://www.deviantart.com/miranimations">Art by Miranda Beland <FaExternalLinkAlt size={8} /></a></p>
    </div>
  )
}

export default Footer