import React, { Component } from 'react';
import SocialRow from './SocialRow';
import logo from '../profile-picture.jpeg';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import IntroSection from './IntroSection';


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Home2</h1>
        <Header />
      </div>
    );
  }
}


export default Home;