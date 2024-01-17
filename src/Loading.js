import React, {useEffect, useState} from 'react';
import './loading.css';
import { TypeAnimation } from 'react-type-animation';


function Loading() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2000); // 3 seconds for the typing animation
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
    <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      750,
      ">",
      "> npm start"
    ]}
    wrapper="span"
    speed={15}
  />
  </div>
  );
}

export default Loading;