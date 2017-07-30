import React, { Component } from 'react';
import SocialRow from './SocialRow';
import logo from '../profile-picture.jpeg';
import Nav from './Nav';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class ProfileSection extends React.Component {
  render() {
    return (
      <div className="site-header container-fluid">
        <div className="row">
          <Nav />
        </div>
        <div className="row row-centered">
          <div className="profile-section col-md-6 col-sm-12">
              <div className="profile-image-container">
                <img src={logo} className="profile-image" alt="Josh Coles" />
              </div>
            <h1>Josh Coles</h1>
            <h2>Junior Full-Stack Web Developer</h2>
            <SocialRow />
          </div>
        </div>
      </div>
    );
  }
}


export default ProfileSection;