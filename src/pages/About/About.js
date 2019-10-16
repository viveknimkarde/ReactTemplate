import React, { useEffect } from 'react';
import './About.css';

function About(props) {

  useEffect(() => {
    console.log("About mounted", props.init);
    return () => {
      console.log("About unmounted", props.init);
    }
  });

  return (
    <div className="App">
      About {props.init.toString()}
    </div>
  );
}

export default About;
