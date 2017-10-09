import React from 'react';

class About extends React.Component {

  render() {
    return (
        <div className="about container-fluid">
          <div className="about-image col-sm-6 col-xs-12">
          </div>
          <div className="about-description col-sm-6 col-xs-12">
            <h2 className="about-heading">About Me</h2>
            <p className="about-content">I'm a junior developer living and working in Vancouver, BC. In 2016 I moved here from Charlottetown, PEI to attend <a href="lighthouselabs.ca" target="_blank" rel="noopener noreferrer">Lighthouse Labs'</a> full-stack web development bootcamp, and now I work at <a href="http://namaste.tv" target="_blank" rel="noopener noreferrer">Namaste TV</a> as a junior web developer. Before that I got a history degree from the University of Prince Edward Island, taught English in France for a year, and started my own pedicab tour business.</p>
          </div>
        </div>
    );
  }
}


export default About;