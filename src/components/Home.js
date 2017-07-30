import React, { Component } from 'react';
import SocialRow from './SocialRow';
import logo from '../profile-picture.jpeg';
import Nav from './Nav';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProfileSection from './ProfileSection';
import IntroSection from './IntroSection';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home.</h1>
      </div>
    );
  }
}


export default Home;