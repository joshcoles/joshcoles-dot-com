import React from 'react';
import SocialRow from './SocialRow';
import Main from './Main';
// import Routes from './Routes';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ProfileSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Josh Coles',
      position: 'Junior Full-Stack Web Developer',
      socialMediaInfo: {
        twitter: "http://twitter.com/joshcoles",
        facebook: "http://facebook.com/joshcoles",
        instagram: "http://instagram.com/joshkcoles",
        linkedin: "http://linkedin.com/in/joshcoles",
        github: "http://github.com/joshcoles",
      }
    };
  }

  render() {
    return (
      <div className="site-header container-fluid">
        <div className="row row-centered">
          <div className="profile-section col-sm-offset-1 col-sm-5 col-xs-12">
              <div className="profile-image-container ">
                <img src="http://i.imgur.com/t8j1n0n.jpg" className="profile-image" alt={this.state.name} />
              </div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.position}</h2>
            <SocialRow urls={this.state.socialMediaInfo} />
            <div id="firebaseui-auth-container"></div>
          </div>
          <div className="intro-section col-sm-5 col-xs-12">
            <div>
              <p>I'm a junior web developer living in Vancouver, BC. In 2016 I graduated from <a target="_blank" rel="noopener noreferrer" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>.</p>

              <p>You can find my up-to-date resume <a target="_blank" rel="noopener noreferrer" href="http://hire.joshcoles.com">here</a>.</p>
              <p>You can send me an email <a href="mailto:josh@joshcoles.com" className="email-address">here</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ProfileSection;
