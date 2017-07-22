import React, { Component } from 'react';
import SocialRow from './SocialRow';
import logo from '../profile-picture.jpeg';

class ProfileSection extends React.Component {
  render() {
    return (
      <div className="profile-section">
          <div className="profile-image-container">
            <img src={logo} className="profile-image" alt="Josh Coles" />
          </div>
        <h1>Josh Coles</h1>
        <h2>Junior Full-Stack Web Developer</h2>
        <SocialRow />
      </div>
    );
  }
}


export default ProfileSection;