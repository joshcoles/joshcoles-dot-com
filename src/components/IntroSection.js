import React from 'react';

class IntroSection extends React.Component {
  render() {
    return (
      <section className="homepage-section homepage-intro container-fluid">
        <div className="row row-centered">
          <div className="intro-bio">
            <h3>Hi, I'm Josh.</h3>
            <p>I'm a junior web developer living in Vancouver, BC. I moved here in the fall of 2016 to take a full-stack web development bootcamp at <a target="_blank" rel="noopener noreferrer" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>.</p>
            <p>Since graduating I've done mostly front-end work on Wordpress sites for <a target="_blank" rel="noopener noreferrer" href="http://pivotandpilot.com">Pivot & Pilot</a> and <a target="_blank" rel="noopener noreferrer" href="http://forgeandsmith.com">Forge and Smith</a>, but I'm interested in working more in React and with other Javascript libraries. I'm going to use this site to practice my react skills.</p>
            <p>You can find my up-to-date resume <a target="_blank" rel="noopener noreferrer" href="http://hire.joshcoles.com">here</a>.</p>
            <p>You can send me an email at <a href="mailto:josh@joshcoles.com" className="email-address">josh@joshcoles.com</a>.</p>
          </div>
        </div>
      </section>
    );
  }
}


export default IntroSection;