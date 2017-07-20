import React, { Component } from 'react';
import logo from './profile-picture.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-header">
        <div className="profile-image-container">
          <img src={logo} className="profile-image" alt="Josh Coles" />
        </div>
          <h1>Josh Coles</h1>
          <h2>Junior Full-Stack Web Developer</h2>
          <div className="social-media-row">
            <ul>
              <li className="twitter"><a rel="noopener noreferrer" target="_blank" href="http://twitter.com/joshcoles"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li className="facebook"><a rel="noopener noreferrer" target="_blank" href="http://facebook.com/joshcoles"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li className="instagram"><a rel="noopener noreferrer" target="_blank" href="http://instagram.com/joshkcoles"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li className="linkedin"><a rel="noopener noreferrer" target="_blank" href="http://linkedin.com/in/joshcoles"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li className="github"><a rel="noopener noreferrer" target="_blank" href="http://github.com/joshcoles"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        <section className="homepage-section homepage-intro">
          <div className="intro-bio">
            <h3>Hi, I'm Josh.</h3>
            <p>I'm a junior web developer living in Vancouver, BC. I moved here in the fall of 2016 to go to take a full-stack web development bootcamp at <a target="_blank" rel="noopener noreferrer" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>.</p>
            <p>Since graduating I've done mostly front-end work on Wordpress sites for <a target="_blank" rel="noopener noreferrer" href="http://pivotandpilot.com">Pivot & Pilot</a> and <a target="_blank" rel="noopener noreferrer" href="http://forgeandsmith.com">Forge and Smith</a>, but I'm interested in working more in React and with other Javascript libraries. I'm going to use this site to practice my react skills.</p>
            <p>You can find my up-to-date resume <a target="_blank" rel="noopener noreferrer" href="http://hire.joshcoles.com">here</a>.</p>
            <p>You can send me an email at <a href="mailto:josh@joshcoles.com" className="email-address">josh@joshcoles.com</a>.</p>

          </div>
        </section>
      </div>
    );
  }
}

export default App;
